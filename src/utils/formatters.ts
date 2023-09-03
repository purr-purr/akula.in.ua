import { APP } from '@utils/const';

import type { ITransVersion } from '@modules/common/types';

export const formatMetaTitle = (title: string): string =>
	`${title} | ${APP.TITLE}`;

export const formatTranslation = (lang: string, value: ITransVersion) => {
	return value[lang as keyof typeof value] || '';
};

export const formatCityTranslation = (city: string | undefined) => {
	// prettier-ignore
	const translation: Record<string, string> = {
		'київ': 'KYIV',
		'київська область': 'KYIV_REGION',
	};

	if (!city) {
		return '';
	}

	const lowerCaseCity = city.toLowerCase();

	if (translation.hasOwnProperty(lowerCaseCity)) {
		return `CITY_LIST.${translation[lowerCaseCity]}`;
	}
	return city;
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

	return `OBJECT_INFO.${translation[value.toLowerCase()]}`;
};
