export const MOBILE_BREAKPOINT = 1024;
export const IS_PRODUCTION = process.env.NODE_ENV === 'production';
export const USD_SYMBOL = '$';
export const PRODUCTION_LINK = 'https://akula.in.ua/';
export const CATALOG_NAME = 'catalog';

export const AUTHOR_INFO = {
	NAME: 'Anton Shaposhnikov',
	SIGNATURE: '=> shaposhnikov.in',
};

export const BACKEND_LOCALHOST = IS_PRODUCTION
	? PRODUCTION_LINK
	: 'http://localhost:5000';
