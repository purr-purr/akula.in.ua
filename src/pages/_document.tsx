import { Head, Html, Main, NextScript } from 'next/document';

import { GOOGLE_SERVICES, IS_PRODUCTION } from '@utils/const';

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
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
					</>
				)}
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
