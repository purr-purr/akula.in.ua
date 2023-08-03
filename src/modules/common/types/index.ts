export interface ICatalogItemData {
	_id: number;
	contractType: string;
	propertyType: string;
	realEstateType: string;
	visibility: boolean;
	city: string;
	address: string;
	station?: string;
	price: number;
	info: { title: string; value: string }[];
	description: string;
	services?: string;
}
