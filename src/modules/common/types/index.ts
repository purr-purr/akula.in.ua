interface ICatalogStaticData {
	id: number;
	contract_type: string;
	property_type: string;
	real_estate_type: string;
	city: string;
	price: number;
}

export interface IDataBaseResponse extends ICatalogStaticData {
	visibility: number;
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

	ua_description: null | string;
	ru_description: null | string;
	en_description: null | string;

	ua_location: null | string;
	ru_location: null | string;
	en_location: null | string;

	ua_address: null | string;
	ru_address: null | string;
	en_address: null | string;

	ua_station: null | string;
	ru_station: null | string;
	en_station: null | string;

	ua_services: null | string;
	ru_services: null | string;
	en_services: null | string;
}

export interface ICatalogData extends ICatalogStaticData {
	visibility: boolean;
	table: ICatalogTable;
	description: {
		ua: null | string;
		ru: null | string;
		en: null | string;
	};
	location: {
		ua: null | string;
		ru: null | string;
		en: null | string;
	};
	address: {
		ua: null | string;
		ru: null | string;
		en: null | string;
	};
	services: {
		ua: null | string;
		ru: null | string;
		en: null | string;
	};
	station: {
		ua: null | string;
		ru: null | string;
		en: null | string;
	};
}

export interface ITransVersion {
	[key: string]: null | string;
}

export interface ICatalogTable {
	[key: string]: null | string | number | undefined;
}
