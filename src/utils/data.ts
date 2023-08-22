export interface INavigation {
	title: string;
	path: string;
}

export const NAVIGATION: INavigation[] = [
	{ title: 'MAIN', path: `/` },
	{ title: 'SERVICES', path: `/services` },
	{ title: 'ALL_REAL_ESTATE', path: `/catalog` },
];
