import type { IFilters } from '@t-types/filters';

export const allValue = 'All';

export const initialFilters: IFilters = {
	contractType: 'Оренда',
	propertyType: allValue,
	realEstateType: allValue,
	city: allValue,
	sortByPrice: 'default',
	sortByTotalArea: 'default',
};
