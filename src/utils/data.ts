interface INavigation {
	title: string;
	path: string;
}

export const NAVIGATION: INavigation[] = [
	{ title: 'Home', path: `/` },
	{ title: 'Catalog', path: `/catalog/` },
	{ title: 'Services', path: `/services/` },
];
