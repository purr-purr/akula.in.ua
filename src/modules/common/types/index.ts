// export interface ICatalogItemData {
// 	_id: number;
// 	contractType: string;
// 	propertyType: string;
// 	realEstateType: string;
// 	visibility: boolean;
// 	city: string;
// 	address: string;
// 	station?: string;
// 	price: number;
// 	info: { title: string; value: string }[];
// 	description: string;
// 	services?: string;
// }

export interface IInitialData {
	id: number;
	contract_type: string;
	property_type: string;
	real_estate_type: string;
	visibility: number;
	city: string;
	address: string;
	station?: string;
	price: number;
	description: string;
	services?: string;
	table_bathrooms: null;
	table_floor: null;
	table_kitchen: null;
	table_land_plot: null;
	table_living_space: null;
	table_offices: null;
	table_purpose: null;
	table_rooms: null;
	table_total_area: null;
	table_usable_area: null;
	table?: ICatalogTable[];
}

export interface ICatalogData {
	id: number;
	contract_type: string;
	property_type: string;
	real_estate_type: string;
	visibility: number;
	city: string;
	address: string;
	station?: string;
	price: number;
	description: string;
	services?: string;
	table?: ICatalogTable[];
}

export interface ICatalogTable {
	[key: string]: null | string | number;
}
