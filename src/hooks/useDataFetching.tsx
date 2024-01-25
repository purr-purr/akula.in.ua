import {useEffect, useMemo, useState} from 'react';

import {BACKEND_LOCALHOST} from '@utils/const';

import type {ICatalogData, IDataBaseResponse} from '@t-types/data';

type RecordFormattedData = undefined | null | string | number;

const useDataFetching = () => {
	const initialData: ICatalogData = {
		city: '',
		contractType: '',
		id: 0,
		price: '',
		propertyType: '',
		realEstateType: '',
		station: {},
		visibility: false,
		description: {},
		address: {},
		location: {},
		table: {},
	};

	const [data, setData] = useState<ICatalogData[]>([initialData]);
	const [loading, setLoading] = useState(true);

	const deletePrefix = (inputText: string | number, wordToDelete: string) => {
		const regex = new RegExp(wordToDelete, 'g');
		return inputText.toString().replace(regex, '');
	};

	useEffect(() => {
		const controller = new AbortController();

		fetch(`${BACKEND_LOCALHOST}/data`, {
			signal: controller.signal,
		})
			.then((response) => response.json())
			.then((data: IDataBaseResponse[]) => memoizedSortData(data))
			.catch((error) => console.error('Error fetching data:', error));

		return () => controller.abort();
		// eslint-disable-next-line
	}, []);

	const sortData = (data: IDataBaseResponse[]) => {
		const result = data.map((item: IDataBaseResponse) => {
			const doneResult = Object.create(initialData);

			let tempObj: IDataBaseResponse = {...item};
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

			return {
				...doneResult,
				...tempObj,
				visibility: tempObj['visibility'] === 1,
				table: tableArray,
				description: descriptionArray,
				address: addressArray,
				location: locationArray,
				station: stationArray,
			};
		});

		const sortResult = result
			.sort((a, b) => b.id - a.id)
			.filter((item) => item.visibility);
		setData(sortResult);
		setLoading(false);
	};

	const memoizedSortData = useMemo(
		() => sortData,
		// eslint-disable-next-line
		[],
	);

	return {
		data,
		loading,
		initialData,
	};
};

export default useDataFetching;
