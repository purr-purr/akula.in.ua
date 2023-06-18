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
		localeDetection: false
	}
}