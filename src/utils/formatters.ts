import { CITY_TRANSLATION, OBJECT_INFO_TRANSLATION } from '@utils/translations';

import type { ITransVersion } from '@t-types/data';

export const formatTranslation = (lang: string, value: ITransVersion) => {
	return value[lang as keyof typeof value] || '';
};

export const formatCityTranslation = (city: string): string => {
	const lowerCaseCity = city.toLowerCase();

	if (CITY_TRANSLATION.hasOwnProperty(lowerCaseCity)) {
		return `CITY_LIST.${CITY_TRANSLATION[lowerCaseCity]}`;
	}
	return city;
};

export const formatCatalogTranslation = (value: string): string => {
	return `OBJECT_INFO.${OBJECT_INFO_TRANSLATION[value.toLowerCase()]}`;
};
