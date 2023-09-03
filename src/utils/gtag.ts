import { GOOGLE_SERVICES } from '@utils/credentials';

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: URL): void => {
	window.gtag('config', `${GOOGLE_SERVICES.GA_TRACKING_ID}`, {
		page_path: url,
	});
};

type GTagEvent = {
	action: string;
	category: string;
	label: string;
	value: number;
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: GTagEvent): void => {
	window.gtag('event', action, {
		event_category: category,
		event_label: label,
		value,
	});
};
