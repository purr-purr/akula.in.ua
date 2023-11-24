import dotenv from 'dotenv';
import mysql from 'mysql';

dotenv.config();

const db = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_TABLE_NAME,
});

db.connect();

const databaseConnection = (res) => {
	const query = 'SELECT * FROM real_estate';
	db.query(query, (error, results) => {
		if (error) {
			console.error(error);
			res.status(500).json({error: 'Database query error'});
		} else {
			res.json(results);
		}
	});
};

export default databaseConnection;
