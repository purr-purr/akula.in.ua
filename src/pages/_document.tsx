import {Head, Html, Main, NextScript} from 'next/document';

import {IS_PRODUCTION} from '@utils/const';
import {GOOGLE_SERVICES} from '@utils/credentials';

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com"/>
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="true"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&family=Playfair+Display:wght@700&display=swap"
					rel="stylesheet"
				/>
				{IS_PRODUCTION && (
					<>
						<script
							async
							src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_SERVICES.GA_TRACKING_ID}`}
						/>

						<script
							dangerouslySetInnerHTML={{
								__html: `
                                    window.dataLayer = window.dataLayer || [];
                                    function gtag(){dataLayer.push(arguments);}
                                    gtag('js', new Date());
                                    gtag('config', '${GOOGLE_SERVICES.GA_TRACKING_ID}', {
                                      page_path: window.location.pathname,
                                    });
                                  `,
							}}
						/>
						<script
							dangerouslySetInnerHTML={{
								__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${GOOGLE_SERVICES.GA_TAG_MANAGER_ID}');`,
							}}
						/>
					</>
				)}
			</Head>
			<body>
			{/* Google Tag Manager (noscript) */}
			<noscript>
				<iframe
					src={`https://www.googletagmanager.com/ns.html?id=${GOOGLE_SERVICES.GA_TAG_MANAGER_ID}`}
					height="0"
					width="0"
					style={{display: 'none', visibility: 'hidden'}}
				></iframe>
			</noscript>
			{/* End Google Tag Manager (noscript) */}
			<Main/>
			<NextScript/>
			</body>
		</Html>
	);
}
