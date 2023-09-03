export const MOBILE_BREAKPOINT: number = 1024;
export const IS_PRODUCTION = process.env.NODE_ENV === 'production';
export const USD_SYMBOL = '$';

export const APP = {
	LINK: 'https://akula.in.ua/',
	TITLE: 'AKULA DEVELOPMENT PARTNER',
	AUTHOR: 'Anton Shaposhnikov',
	AUTHOR_SIGNATURE: '=> shaposhnikov.in',
	CATALOG_NAME: 'catalog',
};

export const BACKEND_LOCALHOST = IS_PRODUCTION
	? APP.LINK
	: 'http://localhost:5000';
