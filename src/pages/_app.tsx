import {useEffect} from 'react';
import type {AppProps} from 'next/app';
import {useRouter} from 'next/router';
import {appWithI18Next} from 'ni18n';
import {ni18nConfig} from 'ni18n.config';
import * as gtag from '@utils/gtag';

import '@styles/globals.scss';
import Layout from '@modules/layout/components/Layout';

function App({Component, pageProps}: AppProps) {
	const router = useRouter();
	const isProduction = process.env.NODE_ENV === 'production';

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
