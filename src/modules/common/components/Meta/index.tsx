import {FC} from 'react';
import Head from 'next/head';

import {AUTHOR_INFO, PRODUCTION_LINK} from '@utils/const';
import {COMPANY_INFO} from '@utils/data';
import {APP_META_DATA} from '@utils/meta';

import FAVICON from '@public/assets/favicon.ico';
import LOGO from '@public/assets/logo.svg';

const Meta: FC<{
	title?: string;
	desc?: string;
	isDefault?: boolean;
}> = ({
	      isDefault = false,
	      title = '',
	      desc = APP_META_DATA.DESC.HOME_AND_SERVICES,
      }) => {
	const manifestPath = '/assets/manifest.webmanifest';
	const formatMetaTitle = (title: string) => {
		return `${title} | ${COMPANY_INFO.NAME}`;
	};

	const metaTitle =
		title.length === 0 ? COMPANY_INFO.NAME : formatMetaTitle(title);

	return (
		<Head>
			<meta charSet="utf-8"/>
			<meta name="viewport" content="width=device-width, initial-scale=1"/>
			<link href={FAVICON.src} rel="icon"/>
			<meta content="width=device-width, initial-scale=1" name="viewport"/>
			<meta content="#FFF" name="theme-color"/>
			<meta content={metaTitle} name="description"/>
			<link href={FAVICON.src} rel="apple-touch-icon"/>
			<link href={manifestPath} rel="manifest"/>
			<title>{metaTitle}</title>
			<link rel="canonical" href={PRODUCTION_LINK}/>
			<meta name="apple-mobile-web-main-title" content={metaTitle}/>
			<meta name="apple-mobile-web-main-capable" content="yes"/>
			<meta name="format-detection" content="telephone=no"/>
			<meta name="format-detection" content="address=no"/>

			{!isDefault && (
				<>
					<meta name="description" content={desc}/>
					<meta name="keywords" content={APP_META_DATA.KEYWORDS}/>
					<meta
						name="author"
						content={AUTHOR_INFO.NAME + ' => ' + AUTHOR_INFO.SIGNATURE}
					/>
					<meta name="image" content={LOGO.src}/>
					<meta property="og:type" content="website"/>
					<meta property="og:title" content={metaTitle}/>
					<meta property="og:description" content={desc}/>
					<meta property="og:image" content={LOGO.src}/>
					<meta property="og:url" content={PRODUCTION_LINK}/>
				</>
			)}
		</Head>
	);
};

export default Meta;
