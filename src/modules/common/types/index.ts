export interface ICatalogItemData {
	_id: number,
	city: string,
	address: string,
	subAddress: string,
	price: string,
	pictures: string[],
	tags: string[],
	info: { contractType: string; }[],
	description: string,
}
