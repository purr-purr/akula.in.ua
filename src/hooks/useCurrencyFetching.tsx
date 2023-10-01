import { useEffect, useState } from 'react';

import { BACKEND_LOCALHOST } from '@utils/const';
import { MONTH_NAME_TO_NUMBER } from '@utils/translations';

interface ICurrencyParse {
	table: string;
	date: string;
}

const useCurrencyFetching = () => {
	const [currencyRate, setCurrencyRate] = useState<number>(0);
	const [currencyDate, setCurrencyDate] = useState<string>('');
	const currentYear = new Date().getFullYear();

	const formatData = (data: ICurrencyParse) => {
		if (!data) {
			return;
		}
		rateFinder(data.table);
		dateFinder(data.date);
	};

	const getMonth = (text: string) => {
		const monthPattern = /([а-я]+?)\s+\d{4}/;
		const match = monthPattern.exec(text);
		let result;

		if (match) {
			const numericMonth =
				MONTH_NAME_TO_NUMBER[match[1] as keyof typeof MONTH_NAME_TO_NUMBER];

			if (numericMonth) {
				result = numericMonth;
			}
		}

		return result;
	};

	const getDay = (text: string) => {
		const parts = text.split(' ');
		let day;

		for (let i = 0; i < parts.length; i++) {
			const part = parts[i];
			const dayCandidate = parseInt(part, 10);
			if (!isNaN(dayCandidate)) {
				day = dayCandidate;
				break;
			}
		}
		return day;
	};

	const dateFinder = (text: string) => {
		const datePattern = /(\d{1,2}\s+[а-я]+?\s+\d{4})/;
		const match = datePattern.exec(text);
		let month, day;

		if (match) {
			const foundDate = match[0];
			month = getMonth(foundDate);
			day = getDay(foundDate);
		}

		setCurrencyDate(day + '.' + month);
	};

	const rateFinder = (text: string) => {
		const pattern = /США(.*?)EUR/g;
		const matches = text.match(pattern);

		if (matches) {
			for (const match of matches) {
				const extractedText = match.replace('США', '').replace('EUR', '');
				const rateValue = extractedText.replace(',', '.');
				setCurrencyRate(+rateValue);
			}
		}
	};

	useEffect(() => {
		const controller = new AbortController();

		fetch(`${BACKEND_LOCALHOST}/currency`, {
			signal: controller.signal,
		})
			.then((response) => response.json())
			.then((data: ICurrencyParse) => formatData(data))
			.catch((error) => console.error('Error fetching currency data:', error));

		return () => controller.abort();
		// eslint-disable-next-line
	}, []);

	return { currencyRate, currencyDate: `${currencyDate}.${currentYear}` };
};

export default useCurrencyFetching;
