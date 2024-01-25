import {useEffect, useRef, useState} from 'react';

import {BACKEND_LOCALHOST} from '@utils/const';
import {DEFAULT_CURRENCY_INFO} from '@utils/data';
import {MONTH_NAME_TO_NUMBER} from '@utils/translations';

interface ICurrencyParse {
	table: string;
	date: string;
}

const useCurrencyFetching = () => {
	const [currencyRate, setCurrencyRate] = useState<number>(
		DEFAULT_CURRENCY_INFO.RATE,
	);
	const [currencyDate, setCurrencyDate] = useState<string>(
		DEFAULT_CURRENCY_INFO.DATE,
	);
	const currentYear = new Date().getFullYear();
	const isMounted = useRef(true);

	const getMonth = (text: string) => {
		const monthPattern = /([а-яґєії]+?)\s+\d{4}/;
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

		for (const part of parts) {
			const dayCandidate = parseInt(part, 10);
			if (!isNaN(dayCandidate)) {
				day = dayCandidate;
			}
		}
		return day;
	};

	const dateFinder = (text: string) => {
		const datePattern = /(\d{1,2}\s+[а-яґєії]+?\s+\d{4})/;
		const match = datePattern.exec(text);
		if (match) {
			const foundDate = match[0];
			const dateTemplate = `${getDay(foundDate)}.${getMonth(foundDate)}`;

			if (currencyDate !== dateTemplate) {
				setCurrencyDate(dateTemplate);
			}
		}
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
			.then((response) => {
				if (!isMounted.current) {
					return;
				}
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				return response.json();
			})
			.then((data: ICurrencyParse) => {
				if (!isMounted.current) {
					return;
				}
				if (data) {
					rateFinder(data.table);
					dateFinder(data.date);
				}
			})
			.catch((error) => {
				if (isMounted.current) {
					console.error('Error fetching currency data:', error);
				}
			});

		return () => {
			isMounted.current = false;
			controller.abort();
		};
		// eslint-disable-next-line
	}, []);

	return {currencyRate, currencyDate: `${currencyDate}.${currentYear}`};
};

export default useCurrencyFetching;
