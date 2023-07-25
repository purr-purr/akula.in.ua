export interface ICatalogItemData {
	_id: number;
	type: string;
	visibility: boolean;
	city: string;
	address: string;
	station?: string;
	price: string;
	pictures: string[];
	tags: string[];
	info: { title: string; value: string }[];
	description: string;
}
