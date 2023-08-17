/**
 * @type {import('next').NextConfig}
 **/

module.exports = {
	sassOptions: {
		additionalData: `@import "src/assets/styles/variables.scss"; @import "src/assets/styles/mixins.scss";`,
	},
	i18n: {
		locales: ['en', 'ru', 'ua'],
		defaultLocale: 'ua',
		localeDetection: false,
	},
	exportPathMap: async function () {
		const paths = {
			'/': { page: '/' },
			'/catalog': { page: '/catalog' },
			'/services': { page: '/services' },
		};

		const languages = ['en', 'ru', 'ua'];
		const defaultLanguage = 'ua';

		for (const language of languages) {
			paths[`/${language}`] = {
				page: `/${language}`,
				query: {
					lang: language,
					__nextDefaultLocale: defaultLanguage,
					__nextLocale: language,
				},
			};
			paths[`/${language}/services`] = {
				page: '/services',
				query: {
					lang: language,
					__nextDefaultLocale: defaultLanguage,
					__nextLocale: language,
				},
			};
			paths[`/${language}/catalog`] = {
				page: '/catalog',
				query: {
					lang: language,
					__nextDefaultLocale: defaultLanguage,
					__nextLocale: language,
				},
			};
		}
		return paths;
	},
};
