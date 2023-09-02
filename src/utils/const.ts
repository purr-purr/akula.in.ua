export const MOBILE_BREAKPOINT: number = 1024;
export const IS_PRODUCTION = process.env.NODE_ENV === 'production';

export const APP = {
	LINK: 'https://akula.in.ua/',
	TITLE: 'Akula Development Partner'.toUpperCase(),
	AUTHOR: 'Anton Shaposhnikov',
	AUTHOR_SIGNATURE: '=> shaposhnikov.in',
	CATALOG_NAME: 'catalog',
};

export const BACKEND_LOCALHOST = IS_PRODUCTION
	? APP.LINK
	: 'http://localhost:5000';

export const GOOGLE_SERVICES = {
	GA_TRACKING_ID: process.env.NEXT_PUBLIC_GA_TRACKING_ID,
	GOOGLE_MAPS_API_KEY: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
};

export const TG_BOT = {
	TOKEN: process.env.NEXT_PUBLIC_TG_BOT_TOKEN,
	CHAT_ID_LIST: [
		process.env.NEXT_PUBLIC_TG_CHAT_ID_ANTON,
		process.env.NEXT_PUBLIC_TG_CHAT_ID_ALINA,
	],
};
