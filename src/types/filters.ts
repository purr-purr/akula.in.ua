export interface IFilters {
	contractType: string;
	propertyType: string;
	realEstateType: string;
	city: string;
	sortByPrice: SortByPriceType;
}

export type SortByPriceType = 'up' | 'down' | 'default' | string;
