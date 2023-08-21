export interface INavigation {
	title: string;
	path: string;
}

export const NAVIGATION: INavigation[] = [
	{ title: 'main', path: `/` },
	{ title: 'services', path: `/services` },
	{ title: 'all-real-estate', path: `/catalog` },
];
