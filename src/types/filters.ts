export interface IFilters {
	contractType: string;
	propertyType: string;
	realEstateType: string;
	city: string;
	sortByPrice: SortByItemType;
	sortByTotalArea: SortByItemType;
}

export type SortByItemType = 'up' | 'down' | 'default' | string;
