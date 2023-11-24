import express from 'express';

import currencyRateParse from './currencyRateParse.js';
import databaseConnection from './database.js';
import processImagesFileList from './processPropertyImagesList.js';

const router = express.Router();

router.get('/filenames/:folderName', (req, res) => {
	processImagesFileList(req, res);
});

router.get('/data', (req, res) => {
	databaseConnection(res);
});

router.get('/currency', (req, res) => {
	currencyRateParse(res);
});

export default router;
