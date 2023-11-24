import express from 'express';

import type { Request, Response } from 'express';

import currencyRateParse from './currencyRateParse';
import databaseConnection from './database';
import processImagesFileList from './processPropertyImagesList';

const router = express.Router();

router.get('/filenames/:folderName', (req: Request, res: Response) => {
	processImagesFileList(req, res);
});

router.get('/data', (req: Request, res: Response) => {
	databaseConnection(res);
});

router.get('/currency', (req: Request, res: Response) => {
	currencyRateParse(res);
});

export default router;
