import { FC } from 'react';
import Head from 'next/head';

import { APP_AUTHOR, APP_AUTHOR_SIGNATURE, APP_LINK } from '@utils/const';
import {
	formatMetaDesc,
	formatMetaKeyWords,
	formatMetaTitle,
} from '@utils/formatters';

import FAVICON from '@public/assets/favicon.ico';
import LOGO from '@public/assets/logo.svg';

const Meta: FC<{
	title: string;
	desc: string | string[];
	keyWords: string[];
}> = ({ title, desc, keyWords }) => {
	const manifestPath: string = '/assets/manifest.webmanifest';
	const metaTitle: string = formatMetaTitle(title);
	const metaDesc: string = formatMetaDesc(desc);
	const metaKeyWords: string = formatMetaKeyWords(title, keyWords);

	return (
		<Head>
			<meta charSet="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link href={FAVICON.src} rel="icon" />
			<meta content="width=device-width, initial-scale=1" name="viewport" />
			<meta content="#F9F9F9" name="theme-color" />
			<meta content={metaTitle} name="description" />
			<link href={FAVICON.src} rel="apple-touch-icon" />
			<link href={manifestPath} rel="manifest" />
			<title>{metaTitle}</title>
			<meta name="description" content={metaDesc} />
			<meta name="keywords" content={metaKeyWords} />
			<meta name="author" content={APP_AUTHOR + ' ' + APP_AUTHOR_SIGNATURE} />
			<meta name="image" content={LOGO.src} />
			<meta property="og:type" content="website" />
			<meta property="og:title" content={metaTitle} />
			<meta property="og:description" content={metaDesc} />
			<meta property="og:image" content={LOGO.src} />
			<meta property="og:url" content={APP_LINK} />
			<link rel="canonical" href={APP_LINK} />
			<meta name="apple-mobile-web-app-title" content={metaTitle} />
			<meta name="apple-mobile-web-app-capable" content="yes" />
			<meta name="format-detection" content="telephone=no" />
			<meta name="format-detection" content="address=no" />
		</Head>
	);
};

export default Meta;
