import {UNITS} from '@modules/pages/catalogPage/utils/units';

import {USD_SYMBOL} from '@utils/const';

export const formatMetaForCatalogPage = (
	city: string,
	address: string | number,
	typeRealEstate: string,
): string => {
	return `Детальна інформація про об'єкт нерухомості у місті ${city} за адресою ${address}. ${typeRealEstate} у зручному розташуванні. Ідеальний варіант для вашого бізнесу або проживання. Наші експерти готові надати детальну консультацію, організувати перегляд і відповісти на всі ваші запитання.`;
};

const formatToPricePrefix = (lang: string, value: string) => {
	const stringValue = value.toString();
	if (stringValue.startsWith('from-') || stringValue.startsWith('to-')) {
		return stringValue.startsWith('from-')
			? UNITS[lang]?.priceFrom
			: UNITS[lang]?.priceTo;
	}
	return '';
};

export const formatToPrefixAndPrice = (
	lang: string,
	value: string,
	currencyRate: number,
) => {
	const formatToNumbers = formatToNumbersOnly(value);
	const price = formatToFullUahPrice(formatToNumbers, currencyRate);
	return formatToPricePrefix(lang, value) + price + ' ' + UNITS[lang].currency;
};

export const formatToPrefixOnly = (lang: string, value: string) => {
	return formatToPricePrefix(lang, value) + formatToNumbersOnly(value);
};

export const formatToNumbersOnly = (value: string) => {
	return Number(value.replace(/[^\d.]/g, ''));
};

const formatToSeparatedNumber = (value: number) => {
	return new Intl.NumberFormat('uk-UA', {
		currency: 'UAH',
	}).format(value);
};

const formatToFullUahPrice = (value: number, currencyRate: number) => {
	const calcPriceUah = value * currencyRate;
	const slicePriceUah = calcPriceUah.toFixed();

	return formatToSeparatedNumber(+slicePriceUah);
};

export const formatTableFullPrice = (
	lang: string,
	value: string,
	currencyRate: number,
) => {
	const removedLetters = formatToNumbersOnly(value);
	const priceUsd = formatToSeparatedNumber(removedLetters) + USD_SYMBOL;

	return (
		formatToPricePrefix(lang, value) +
		formatToFullUahPrice(removedLetters, currencyRate) +
		UNITS[lang].currency +
		UNITS[lang].separator +
		priceUsd
	);
};

export const formatTableAfterPrefix = (
	contractType: 'Оренда' | 'Продаж' | string,
	lang: string,
	value: string | number,
): string => {
	const starElement = `<span class="star">*</span>`;

	const translation: Record<string, string> = {
		TOTALAREA: UNITS[lang].squareMeters,
		USABLEAREA: UNITS[lang].squareMeters,
		OFFICES: UNITS[lang].pieces,
		KITCHEN: UNITS[lang].squareMeters,
		BATHROOMS: UNITS[lang].pieces,
		LIVINGSPACE: UNITS[lang].squareMeters,
		ROOMS: UNITS[lang].pieces,
		LANDPLOT: UNITS[lang].landPlot,
		RENT1M2:
			contractType === 'Оренда'
				? `${UNITS[lang].month}${starElement}`
				: UNITS[lang].squareMeters,
		OPERATIONAL1M2:
			contractType === 'Оренда'
				? `${UNITS[lang].month}${starElement}`
				: UNITS[lang].squareMeters,
		TOTALCOST:
			contractType === 'Оренда' ? `${UNITS[lang].month}${starElement}` : '',
	};

	return (value && translation[value]) || '';
};
