import express from 'express';
import routes from './routes.js';

const app = express();
const port = 5000;

app.use((req, res, next) => {
	const isProduction = app.get('env') === 'production';
	const IP = isProduction ? 'https://akula.in.ua' : 'http://localhost:3000';
	res.setHeader('Access-Control-Allow-Origin', IP);
	next();
});

const startServer = () => {
	try {
		app.use('/', routes);
		app.listen(port, () => {
			console.log(`Backend server is running on port:${port}`);
		});
	} catch (error) {
		console.error(error);
	}
}

startServer();