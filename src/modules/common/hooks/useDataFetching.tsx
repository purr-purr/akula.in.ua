import { useEffect, useState } from 'react';

import { BACKEND_LOCALHOST } from '@utils/const';

import type { ICatalogData, IDataBaseResponse } from '@modules/common/types';

type RecordFormattedData = undefined | null | string | number;

const useDataFetching = () => {
	const initialData: ICatalogData = {
		city: '',
		contract_type: '',
		id: 0,
		price: 0,
		property_type: '',
		real_estate_type: '',
		station: {
			ua: null,
			ru: null,
			en: null,
		},
		visibility: false,
		description: {
			ua: null,
			ru: null,
			en: null,
		},
		address: {
			ua: null,
			ru: null,
			en: null,
		},
		location: {
			ua: null,
			ru: null,
			en: null,
		},
		table: {},
	};

	const [data, setData] = useState<ICatalogData[]>([initialData]);
	const [loading, setLoading] = useState(false);

	const deletePrefix = (inputText: string, wordToDelete: string) => {
		const regex = new RegExp(wordToDelete, 'g');
		return inputText.replace(regex, '');
	};

	useEffect(() => {
		fetch(`${BACKEND_LOCALHOST}/data`)
			.then((response) => response.json())
			.then((data: IDataBaseResponse[]) => sortData(data))
			.catch((error) => console.error('Error fetching data:', error));
	}, []);

	const sortData = (data: IDataBaseResponse[]) => {
		const result = data.map((item: IDataBaseResponse) => {
			const doneResult = Object.create(initialData);

			const tempObj: IDataBaseResponse = { ...item };
			let tableArray: Record<string, RecordFormattedData> = {};
			let descriptionArray: Record<string, RecordFormattedData> = {};
			let addressArray: Record<string, RecordFormattedData> = {};
			let locationArray: Record<string, RecordFormattedData> = {};
			let stationArray: Record<string, RecordFormattedData> = {};
			for (const key in tempObj) {
				const subKey = key as keyof IDataBaseResponse;

				if (key.startsWith('table_')) {
					const newKey = deletePrefix(subKey, 'table_');
					tableArray[newKey] = tempObj[subKey];
					delete tempObj[subKey];
				}

				if (key.endsWith('_description')) {
					const newKey = deletePrefix(subKey, '_description');
					descriptionArray[newKey] = tempObj[subKey];
					delete tempObj[subKey];
				}

				if (key.endsWith('_location')) {
					const newKey = deletePrefix(subKey, '_location');
					locationArray[newKey] = tempObj[subKey];
					delete tempObj[subKey];
				}

				if (key.endsWith('_address')) {
					const newKey = deletePrefix(subKey, '_address');
					addressArray[newKey] = tempObj[subKey];
					delete tempObj[subKey];
				}

				if (key.endsWith('_station')) {
					const newKey = deletePrefix(subKey, '_station');
					stationArray[newKey] = tempObj[subKey];
					delete tempObj[subKey];
				}
			}

			let itemFormattedData = Object.assign(tempObj, doneResult);
			itemFormattedData.visibility = tempObj['visibility'] === 1;
			itemFormattedData.table = tableArray;
			itemFormattedData.description = descriptionArray;
			itemFormattedData.address = addressArray;
			itemFormattedData.location = locationArray;
			itemFormattedData.station = stationArray;

			return itemFormattedData;
		});

		setData(result);
		setLoading(false);
	};

	return {
		data,
		loading,
		initialData,
	};
};

export default useDataFetching;
