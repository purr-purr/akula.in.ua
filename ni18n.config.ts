import type { Ni18nOptions } from 'ni18n';

export const ni18nConfig: Ni18nOptions = {
	supportedLngs: ['en', 'ua', 'ru'],
	ns: ['common'],
	detection: {
		order: ['querystring', 'cookie', 'localStorage', 'navigator'],
	},
	react: { useSuspense: false },
	interpolation: { escapeValue: false },
};
