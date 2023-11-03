import dotenv from 'dotenv';
import mysql from 'mysql';

import type { Response } from 'express';
import type { Connection } from 'mysql';

dotenv.config();

const db: Connection = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_TABLE_NAME,
});

db.connect();

const databaseConnection = (res: Response): void => {
	const query = 'SELECT * FROM real_estate';
	db.query(query, (error, results) => {
		if (error) {
			console.error(error);
			res.status(500).json({ error: 'Database query error' });
		} else {
			res.json(results);
		}
	});
};

export default databaseConnection;
