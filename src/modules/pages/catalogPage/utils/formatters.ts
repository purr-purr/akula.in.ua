import { UNITS } from '@modules/pages/catalogPage/utils/units';

import { USD_SYMBOL } from '@utils/const';
import { CURRENCY } from '@utils/data';

export const formatMetaForCatalogPage = (
	city: string,
	address: string,
	typeRealEstate: string,
): string => {
	return `Детальна інформація про об'єкт нерухомості у місті ${city} за адресою ${address}. ${typeRealEstate} у зручному розташуванні. Ідеальний варіант для вашого бізнесу або проживання. Наші експерти готові надати детальну консультацію, організувати перегляд і відповісти на всі ваші запитання.`;
};

const getPricePrefix = (lang: string, value: string) => {
	const stringValue = value.toString();
	if (stringValue.startsWith('from-') || stringValue.startsWith('to-')) {
		return stringValue.startsWith('from-')
			? UNITS[lang].priceFrom
			: UNITS[lang].priceTo;
	}
	return '';
};

export const formatToFullPriceWithPrefix = (lang: string, value: string) => {
	return getPrefixAndValue(lang, value) + USD_SYMBOL;
};

export const getPrefixAndValue = (lang: string, value: string) => {
	return getPricePrefix(lang, value) + cleanLetters(value);
};

export const cleanLetters = (value: string) => {
	return value.replace(/[A-Za-z-]+/g, '');
};

export const formatTableFullPrice = (lang: string, value: string) => {
	const convertToFullPrice = (value: string) => {
		const removedLetters = cleanLetters(value);
		const priceUah = Number(removedLetters) * CURRENCY.UAH;
		const priceUsd = removedLetters + USD_SYMBOL;
		return priceUsd + UNITS[lang].separator + priceUah.toFixed();
	};

	return getPricePrefix(lang, value) + convertToFullPrice(value);
};

export const formatTableAfterPrefix = (
	contractType: 'Оренда' | 'Продаж' | string,
	lang: string,
	value: string | number,
): string => {
	const starElement = `<span class="star">*</span>`;

	const translation: Record<string, string> = {
		TOTAL_AREA: UNITS[lang].squareMeters,
		USABLE_AREA: UNITS[lang].squareMeters,
		OFFICES: UNITS[lang].pieces,
		KITCHEN: UNITS[lang].squareMeters,
		BATHROOMS: UNITS[lang].pieces,
		LIVING_SPACE: UNITS[lang].squareMeters,
		ROOMS: UNITS[lang].pieces,
		LAND_PLOT: UNITS[lang].landPlot,
		RENT_1_M2:
			contractType === 'Оренда'
				? `${UNITS[lang].currency}${UNITS[lang].month}${starElement}`
				: UNITS[lang].squareMeters,
		OPERATIONAL_1_M2:
			contractType === 'Оренда'
				? `${UNITS[lang].currency}${UNITS[lang].month}${starElement}`
				: UNITS[lang].squareMeters,
		TOTAL_COST:
			contractType === 'Оренда'
				? `${UNITS[lang].currency}${UNITS[lang].month}${starElement}`
				: UNITS[lang].currency,
	};

	return (value && translation[value]) || '';
};
