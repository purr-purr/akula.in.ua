interface ICatalogStaticData {
	id: number;
	contract_type: string;
	property_type: string;
	real_estate_type: string;
	city: string;
	price: string;
}

export interface IDataBaseResponse extends ICatalogStaticData {
	[key: string]: null | string | number;
}

export interface ICatalogData extends ICatalogStaticData {
	visibility: boolean;
	table: ICatalogTable;
	description: ITransVersion;
	location: ITransVersion;
	address: ITransVersion;
	station: ITransVersion;
}

export interface ITransVersion {
	[key: string]: null | string;
}

export interface ICatalogTable {
	[key: string]: null | string | number;
}
