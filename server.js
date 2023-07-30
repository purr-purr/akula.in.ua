const express = require('express');
// const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 5000;
// app.use(cors());

// const isProduction = process.env.NODE_ENV === 'production';

// const address = isProduction ? 'http://31.222.235.16' : 'http://localhost:3000';

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', 'http://31.222.235.16:4400');
	next();
});

app.get('/filenames/:folderName', (req, res) => {
	const imagesPath = 'public/assets/property/' + req.params.folderName;
	const folderPath = path.join(__dirname, imagesPath);
	
	fs.readdir(folderPath, (err, files) => {
		if (err) {
			console.error(err);
			return res.status(500).json({error: 'Error reading folder'});
		}
		res.json(files);
	});
});

app.listen(port, () => {
	console.log(`Backend server is running on http://localhost:${port}`);
});
