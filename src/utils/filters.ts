export interface IFilters {
	propertyType: string;
	realEstateType: string;
	city: string;
}

export const allValue = 'All';

export const initialFilters: IFilters = {
	propertyType: allValue,
	realEstateType: allValue,
	city: allValue,
};
