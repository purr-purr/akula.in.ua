/**
 * @type {import('next').NextConfig}
 **/

module.exports = {
	sassOptions: {
		additionalData: `@import "src/assets/styles/variables.scss"; @import "src/assets/styles/mixins.scss";`,
	},
	i18n: {
		defaultLocale: 'ua',
		locales: ['en', 'ru', 'ua'],
		localeDetection: false,
	},
	exportPathMap: async function () {
		const paths = {
			'/': { page: '/' },
			'/catalog': { page: '/catalog' },
			'/services': { page: '/services' },
		};

		const languages = ['en', 'ru', 'ua'];
		for (const language of languages) {
			paths[`/${language}`] = { page: `/${language}` };
			paths[`/${language}/services`] = {
				page: '/services',
				query: { lang: language },
			};
			paths[`/${language}/catalog`] = {
				page: '/catalog',
				query: { lang: language },
			};
		}
		return paths;
	},
};
