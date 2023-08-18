import { useEffect, useState } from 'react';

import { ICatalogData } from '@modules/common/types';

import { BACKEND_LOCALHOST } from '@utils/const';

import type { IInitialData } from '@modules/common/types';

const useDataFetching = () => {
	const [data, setData] = useState<IInitialData[]>([]);
	const [loading, setLoading] = useState(false);

	const initialData: ICatalogData = {
		address: '',
		city: '',
		contract_type: '',
		description: '',
		id: 0,
		price: 2,
		property_type: '',
		real_estate_type: '',
		services: '',
		station: '',
		visibility: 1,
	};

	useEffect(() => {
		fetch(`${BACKEND_LOCALHOST}/data`)
			.then((response) => response.json())
			.then((data: IInitialData[]) => sortData(data))
			.catch((error) => console.error('Error fetching data:', error));
	}, []);

	const sortData = (data: IInitialData[]) => {
		const result = data.map((item: IInitialData) => {
			const newObj: IInitialData = { ...item };
			const tableArray: Record<string, any>[] = [];

			for (const key in newObj) {
				if (key.startsWith('table_')) {
					const subKey = key as keyof IInitialData;
					tableArray.push({ [subKey]: newObj[subKey] });
					delete newObj[subKey];
				}
			}

			newObj.table = tableArray;
			return newObj;
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
