export interface IFilters {
	contractType: string;
	propertyType: string;
	realEstateType: string;
	city: string;
	sortByPrice: SortByPriceType;
}

export type SortByPriceType = 'up' | 'down' | 'default' | string;

export const allValue = 'All';

export const initialFilters: IFilters = {
	contractType: 'Оренда',
	propertyType: allValue,
	realEstateType: allValue,
	city: allValue,
	sortByPrice: 'default',
};
