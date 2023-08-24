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
