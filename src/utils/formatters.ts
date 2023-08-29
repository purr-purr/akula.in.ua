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
