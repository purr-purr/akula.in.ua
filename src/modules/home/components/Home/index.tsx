import {useTranslation} from 'react-i18next';

import Feedback from '@modules/common/components/Feedback';
import Meta from '@modules/common/components/Meta';
import Filter from "@modules/common/components/Filter";
import {useEffect, useState} from "react";
import {BACKEND_LOCALHOST} from "@utils/const";

// export interface ICatalogItemData2 {
// 	id: number;
// 	contract_type: string;
// 	property_type: string;
// 	real_estate_type: string;
// 	visibility: number;
// 	city: string;
// 	address: string;
// 	station?: string;
// 	price: number;
// 	table?: TABLE[];
// 	description: string;
// 	services?: string;
// }

interface IInitialData {
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
	table_bathrooms: null,
	table_floor: null,
	table_kitchen: null,
	table_land_plot: null,
	table_living_space: null,
	table_offices: null,
	table_purpose: null,
	table_rooms: null,
	table_total_area: null,
	table_usable_area: null,
	table?: TABLE[];
}

interface INewResult {
	id: number;
	contract_type: string;
	property_type: string;
	real_estate_type: string;
	visibility: number;
	city: string;
	address: string;
	station?: string;
	price: number;
	table?: TABLE[];
	description: string;
	services?: string;
}

type TABLE = { [key: string]: null | string | number };

const Home = () => {
	const {t, i18n} = useTranslation('common');

	const [data, setData] = useState<IInitialData[]>([]);

	useEffect(() => {
		console.log('request');
		fetch(`${BACKEND_LOCALHOST}/data`)
			.then(response => response.json())
			.then((data: IInitialData[]) => sortData(data))
			.catch(error => console.error('Error fetching data:', error));
	}, []);


	console.log(data)

	const sortData = (data: IInitialData[]) => {
		const result = data.map((item: IInitialData) => {
			const newObj: IInitialData = {...item};
			// const subObj: Partial<IInitialData> = {};
			const tableArray: Record<string, any>[] = [];

			for (const key in newObj) {
				if (key.startsWith("table_")) {
					const subKey = key as keyof IInitialData;
					tableArray.push({[subKey]: newObj[subKey]});
					delete newObj[subKey];
				}
			}

			// subObj.table = tableArray;
			newObj.table = tableArray;
			console.log(newObj)
		})

		setData(result);
	};


	const test1 = {
		address: "",
		city: "",
		contract_type: "",
		description: "",
		id: 4,
		price: 2,
		property_type: "",
		real_estate_type: "",
		services: "",
		station: "",
		table_bathrooms: null,
		table_floor: null,
		table_kitchen: null,
		table_land_plot: null,
		table_living_space: null,
		table_offices: null,
		table_purpose: null,
		table_rooms: null,
		table_total_area: null,
		table_usable_area: null,
		visibility: 1,
	};


	return (
		<>
			<Meta title="Home" desc="desc" keyWords={['keywords']}/>
			<h1>{t('home')}</h1>
			<br/>
			current language is: {i18n.language}
			<Filter/>
			<Feedback/>

			<ul>
				{data.map((item, i) => (
					<li key={i}>{item.id}<br/>{item.city}<br/>{item.address}</li>
				))}
			</ul>
		</>
	);
};

export default Home;
