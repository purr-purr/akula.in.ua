/**
 * @type {import('next').NextConfig}
 */
// const withImages = require('next-images');

const nextConfig = {
	sassOptions: {
		additionalData: `@import "src/assets/styles/variables.scss"; @import "src/assets/styles/mixins.scss";`,
	},
	i18n: {
		locales: ['en', 'ru', 'ua'],
		defaultLocale: 'ua',
		localeDetection: false,
	},
	exportPathMap: async () => {
		const paths = {
			'/': {
				page: '/',
				query: {
					lang: 'ua',
					__nextDefaultLocale: 'ua',
					__nextLocale: 'ua',
				},
			},
			'/catalog': {
				page: '/catalog',
				query: {
					lang: 'ua',
					__nextDefaultLocale: 'ua',
					__nextLocale: 'ua',
				},
			},
			'/services': {
				page: '/services',
				query: {
					lang: 'ua',
					__nextDefaultLocale: 'ua',
					__nextLocale: 'ua',
				},
			},
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
	webpack: (config, {isServer}) => {
		config.module.rules.push({
			test: /\.(mp4|webm|mov)$/,
			use: {
				loader: 'url-loader',
				options: {
					limit: 500 * 1024 * 1024,
					fallback: 'file-loader',
					publicPath: '/_next/static/media/',
					outputPath: `${isServer ? '../' : ''}/_next/static/media/`,
					name: '[name].[ext]',
				},
			},
		});
		
		return config;
	},
};

export default nextConfig;
