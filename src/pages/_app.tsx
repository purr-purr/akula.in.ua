import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { appWithI18Next, useSyncLanguage } from 'ni18n';
import { ni18nConfig } from 'ni18n.config';

import Layout from '@modules/layout/components/Layout';

import { IS_PRODUCTION } from '@utils/const';
import * as gtag from '@utils/gtag';

import type { AppProps } from 'next/app';

import '@styles/globals.scss';
import Loader from '@modules/common/components/Loader';
import Meta from '@modules/common/components/Meta';

function App({ Component, pageProps }: AppProps) {
	const locale =
		typeof window !== 'undefined' && window.localStorage.getItem('userLanguage');

	useSyncLanguage(locale ? locale : 'ua');

	const router = useRouter();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const handleRouteChange = (url: URL) => {
			IS_PRODUCTION && gtag.pageview(url);
		};
		router.events.on('routeChangeComplete', handleRouteChange);
		return () => {
			router.events.off('routeChangeComplete', handleRouteChange);
		};
	}, [router.events]);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 1500);
	}, []);

	return (
		<>
			<Meta isDefault />
			{loading ? (
				<Loader type="fullscreen" />
			) : (
				<Layout>
					<Component {...pageProps} />
				</Layout>
			)}
		</>
	);
}

export default appWithI18Next(App, ni18nConfig);
