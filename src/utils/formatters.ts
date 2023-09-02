import { useTranslation } from 'react-i18next';

import { ITransVersion } from '@modules/common/types';

import { APP } from '@utils/const';
import { CURRENCY } from '@utils/data';

export const formatMetaTitle = (title: string): string =>
	`${title} | ${APP.TITLE}`;

export const formatMetaForCatalogPage = (
	city: string,
	address: string,
	typeRealEstate: string,
): string => {
	return `Детальна інформація про об'єкт нерухомості у місті ${city} за адресою ${address}. ${typeRealEstate} у зручному розташуванні. Ідеальний варіант для вашого бізнесу або проживання. Наші експерти готові надати детальну консультацію, організувати перегляд і відповісти на всі ваші запитання.`;
};

export const formatTranslation = (lang: string, value: ITransVersion) => {
	return value[lang as keyof typeof value] || '';
};

export const formatPrice = (value: number) => {
	const usdSymbol = '$';
	const price = value.toString();
	if (price.length <= 3) {
		return price + usdSymbol;
	}
	return price[0] + ' ' + price.substring(1) + usdSymbol;
};

export const formatConvertedPrice = (
	value: string | number | undefined,
	separator: string,
) => {
	if (value) {
		const usdSymbol = '$';
		const priceUah = Number(value) * CURRENCY.UAH;
		const priceUsd = value + usdSymbol;

		return priceUsd + separator + priceUah.toFixed();
	}
};

export const formatCityTranslation = (city: string): string => {
	// prettier-ignore
	const translation: Record<string, string> = {
		'київ': 'KYIV',
	};

	return `CITY_LIST.${translation[city.toLowerCase()] || ''}`;
};

export const formatTableParameters = (
	contractType: 'Оренда' | 'Продаж' | string,
	lang: string,
	value: string | number | undefined,
): string => {
	const units = {
		en: {
			pieces: 'pcs',
			landPlot: 'acres',
			squareMeters: 'm²',
			month: '/month',
			currency: 'uah',
		},
		ru: {
			pieces: 'шт.',
			landPlot: 'соток',
			squareMeters: 'м²',
			month: '/мес.',
			currency: 'грн',
		},
		ua: {
			pieces: 'шт.',
			landPlot: 'соток',
			squareMeters: 'м²',
			month: '/міс.',
			currency: 'грн',
		},
	} as Record<string, { [key: string]: string }>;

	const translation: Record<string, string> = {
		TOTAL_AREA: units[lang].squareMeters,
		USABLE_AREA: units[lang].squareMeters,
		OFFICES: units[lang].pieces,
		KITCHEN: units[lang].squareMeters,
		BATHROOMS: units[lang].pieces,
		LIVING_SPACE: units[lang].squareMeters,
		ROOMS: units[lang].pieces,
		LAND_PLOT: units[lang].landPlot,
		RENT_1_M2:
			contractType === 'Оренда'
				? `${units[lang].currency}${units[lang].month}<span class="star">*</span>`
				: units[lang].squareMeters,
		OPERATIONAL_1_M2:
			contractType === 'Оренда'
				? `${units[lang].currency}${units[lang].month}<span class="star">*</span>`
				: units[lang].squareMeters,
	};

	return (value && translation[value]) || '';
};

export const formatCatalogTranslation = (value: string): string => {
	// prettier-ignore
	const translation: Record<string, string> = {
		'оренда': 'RENT',
		'продаж': 'SELLING',
		'земельні ділянки': 'GROUND_SECTION',
		'нежитлова нерухомість': 'NON_RESIDENTIAL_REAL_ESTATE',
		'житлова нерухомість': 'RESIDENTIAL_REAL_ESTATE',
		'квартира': 'APARTMENT',
		'новобудова': 'NEW_BUILDING',
		'будинок': 'HOUSE',
		'офіс': 'OFFICE',
		'приміщення під будь-який вид діяльності': 'PREMISES_FOR_ANY_TYPE_OF_ACTIVITY',
		'торгова площа': 'RETAIL_SPACE',
		'складське приміщення': 'STORAGE_ROOM',
		'земля': 'LAND',
	};

	return `OBJECT_INFO.${translation[value.toLowerCase()] || ''}`;
};
