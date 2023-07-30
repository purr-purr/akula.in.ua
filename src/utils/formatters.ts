import {APP_META_COMMON_KEYWORDS, APP_META_DESC, APP_TITLE} from '@utils/const';

export const formatMetaTitle = (title: string): string =>
	`${title} ${APP_TITLE}`;

export const formatMetaDesc = (title: string | string[]): string => {
	if (typeof title !== 'string') {
		const list = title.join(' and ');
		return `${list} ${APP_TITLE} ${APP_META_DESC}`;
	} else {
		return `${title} ${APP_TITLE} ${APP_META_DESC}`;
	}
};

export const formatMetaKeyWords = (
	title: string,
	allSubTitles: string[],
): string => {
	const list = allSubTitles.join(', ');
	return `${title}, ${APP_TITLE}, ${list}, ${APP_META_COMMON_KEYWORDS}`;
};
