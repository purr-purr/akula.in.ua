import { ITransVersion } from '@modules/common/types';

import { APP } from '@utils/const';

export const formatMetaTitle = (title: string): string =>
	`${title} | ${APP.TITLE}`;

export const formatMetaDesc = (title: string | string[]): string => {
	if (typeof title !== 'string') {
		const list = title.join(' and ');
		return `${list} ${APP.TITLE} ${APP.META_DESC}`;
	} else {
		return `${title} ${APP.TITLE} ${APP.META_DESC}`;
	}
};

export const formatMetaKeyWords = (
	title: string,
	allSubTitles: string[],
): string => {
	const list = allSubTitles.join(', ');
	return `${title}, ${APP.TITLE}, ${list}, ${APP.META_COMMON_KEYWORDS}`;
};

export const formatTranslation = (lang: string, value: ITransVersion) => {
	return value[lang as keyof typeof value] || '';
};

export const formatPrice = (value: number) => {
	const price = value.toString();
	if (price.length <= 1) {
		return price;
	}

	return price[0] + ' ' + price.substring(1) + '$';
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
		en: { pieces: 'pcs', landPlot: 'acres', squareMeters: 'm²', month: '/month' },
		ru: { pieces: 'шт.', landPlot: 'соток', squareMeters: 'м²', month: '/мес.' },
		ua: { pieces: 'шт.', landPlot: 'соток', squareMeters: 'м²', month: '/міс.' },
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
				? `${units[lang].squareMeters}${units[lang].month}<span class="star">*</span>`
				: units[lang].squareMeters,
		OPERATIONAL_1_M2:
			contractType === 'Оренда'
				? `${units[lang].squareMeters}${units[lang].month}<span class="star">*</span>`
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
