import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import type { Request, Response } from 'express';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const processPropertyImagesList = (req: Request, res: Response): void => {
	const imagesPath =
		'public/assets/property/production/' + req.params.folderName;
	const folderPath = path.join(__dirname, imagesPath);

	fs.readdir(folderPath, (err, files) => {
		if (err) {
			console.error(err);
			return res.status(500).json({ error: 'Error reading folder' });
		}

		res.json(files);
	});
};

export default processPropertyImagesList;
