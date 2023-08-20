const express = require('express');
const mysql = require('mysql');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 5000;
const isProduction = app.get('env') === 'production';
const IP = isProduction ? 'http://akula.in.ua' : 'http://localhost:3000';

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
	const query = 'SELECT * FROM real_estate';
	db.query(query, (error, results) => {
		if (error) throw error;
		res.json(results);
	});
});

app.listen(port, () => {
	console.log(`Backend server is running on http://localhost:${port}`);
});
