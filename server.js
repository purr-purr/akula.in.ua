const express = require('express');
const mysql = require('mysql');
const cheerio = require('cheerio');
const axios = require('axios');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 5000;
const isProduction = app.get('env') === 'production';
const IP = isProduction ? 'https://akula.in.ua' : 'http://localhost:3000';
const currencyRateUrl =
	'https://www.eximb.com/ua/business/pryvatnym-klientam/pryvatnym-klientam-inshi-poslugy/obmin-valyut/kursy-valyut.html';

require('dotenv').config();

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', IP);
	next();
});

app.get('/filenames/:folderName', (req, res) => {
	const imagesPath = 'public/assets/property/' + req.params.folderName;
	const folderPath = path.join(__dirname, imagesPath);

	fs.readdir(folderPath, (err, files) => {
		if (err) {
			console.error(err);
			return res.status(500).json({ error: 'Error reading folder' });
		}
		res.json(files);
	});
});

const db = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_TABLE_NAME,
});

db.connect();

app.get('/data', (req, res) => {
	const query = `SELECT * FROM real_estate`;
	db.query(query, (error, results) => {
		if (error) throw error;
		res.json(results);
	});
});

app.get('/currency', (req, res) => {
	axios
		.get(currencyRateUrl)
		.then((response) => {
			if (response.status === 200) {
				const html = response.data;
				const $ = cheerio.load(html);

				const elementTable = $('.styled-table tr td').text();
				const elementDate = $('#depoList h5').text();

				const result = {
					table: elementTable,
					date: elementDate,
				};
				res.json(result);
			} else {
				const errorText = 'Failed to fetch the webpage';
				console.error(errorText);
				res.status(500).send(errorText);
			}
		})
		.catch((error) => {
			console.error('Error:', error);
			res.status(500).send('An error occurred');
		});
});

app.listen(port, () => {
	console.log(`Backend server is running on port:${port}`);
});
