import { APP_META_DESC, APP_TITLE, COMMON_KEY_WORDS } from '@utils/const';

export const formatMetaTitle = (title: string) => `${title} ${APP_TITLE}`;

export const formatMetaDesc = (title: string | string[]) => {
	if (typeof title !== 'string') {
		const list = title.join(' and ');
		return `${list} ${APP_TITLE} ${APP_META_DESC}`;
	} else {
		return `${title} ${APP_TITLE} ${APP_META_DESC}`;
	}
};

export const formatMetaKeyWords = (title: string, allSubTitles: string[]) => {
	const list = allSubTitles.join(', ');
	return `${title}, ${APP_TITLE}, ${list}, ${COMMON_KEY_WORDS}`;
};
