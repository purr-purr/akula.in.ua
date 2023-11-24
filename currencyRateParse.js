import axios from 'axios';
import cheerio from 'cheerio';

const currencyRateUrl =
	'https://www.eximb.com/ua/business/pryvatnym-klientam/pryvatnym-klientam-inshi-poslugy/obmin-valyut/kursy-valyut.html';

const currencyRateParse = (res) => {
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
};

export default currencyRateParse;
