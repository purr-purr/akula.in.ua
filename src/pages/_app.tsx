import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import { appWithI18Next } from 'ni18n';
import { ni18nConfig } from 'ni18n.config';

import * as gtag from '@utils/gtag';

import '@styles/globals.scss';
import { initReactI18next } from 'react-i18next';

import Layout from '@modules/layout/components/Layout';
import i18n from 'i18next';

function App({ Component, pageProps }: AppProps) {
	const router = useRouter();
	const isProduction = process.env.NODE_ENV === 'production';

	i18n.use(initReactI18next).init(ni18nConfig).then();

	useEffect(() => {
		const handleRouteChange = (url: URL) => {
			isProduction && gtag.pageview(url);
		};
		router.events.on('routeChangeComplete', handleRouteChange);
		return () => {
			router.events.off('routeChangeComplete', handleRouteChange);
		};
	}, [router.events]);

	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default appWithI18Next(App, ni18nConfig);
