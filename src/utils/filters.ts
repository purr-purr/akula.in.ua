export interface IFilters {
	propertyType: string;
	realEstateType: string;
	city: string;
	sortByPrice: SortByPriceType;
}

export type SortByPriceType = 'up' | 'down' | 'default' | string;

export const allValue = 'All';

export const initialFilters: IFilters = {
	propertyType: allValue,
	realEstateType: allValue,
	city: allValue,
	sortByPrice: 'default',
};
