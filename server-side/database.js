import dotenv from 'dotenv';
import mysql from 'mysql';

dotenv.config();

const pool = mysql.createPool({
	connectionLimit: 20,
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_TABLE_NAME,
});

const databaseConnection = (res) => {
	const query = 'SELECT * FROM real_estate';
	
	pool.getConnection((err, connection) => {
		if (err) {
			console.error('Error getting database connection:', err);
			res.status(500).json({error: 'Database connection error'});
			return;
		}
		
		connection.query(query, (error, results) => {
			connection.release();
			
			if (error) {
				console.error('Database query error:', error);
				res.status(500).json({error: 'Database query error'});
			} else {
				res.json(results);
			}
		});
	});
};

export default databaseConnection;
