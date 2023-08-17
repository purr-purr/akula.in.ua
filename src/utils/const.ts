export const MOBILE_BREAKPOINT: number = 1024;
export const IS_PRODUCTION = process.env.NODE_ENV === 'production';

// APP
export const APP_LINK: string = 'https://akula.in.ua/';
export const APP_TITLE: string = 'Title';
export const APP_AUTHOR: string = 'Anton Shaposhnikov';
export const APP_AUTHOR_SIGNATURE: string = '=> shaposhnikov.in';
export const APP_CATALOG_NAME: string = 'catalog';
export const APP_META_DESC: string = 'text';
export const APP_META_COMMON_KEYWORDS: string = 'text';

// GOOGLE SERVICES
export const GA_TRACKING_ID: string | undefined =
	process.env.NEXT_PUBLIC_GA_TRACKING_ID;
export const GOOGLE_MAPS_API_KEY: string | undefined =
	process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

// BACKEND
export const BACKEND_LOCALHOST: string = IS_PRODUCTION
	? 'http://31.222.235.16:5000'
	: 'http://localhost:5000';

// TG BOT
export const TG_BOT_TOKEN: string | undefined =
	process.env.NEXT_PUBLIC_TG_BOT_TOKEN;

export const TG_CHAT_ID_LIST: (string | undefined)[] = [
	process.env.NEXT_PUBLIC_TG_CHAT_ID_ANTON,
	process.env.NEXT_PUBLIC_TG_CHAT_ID_ALINA,
];
