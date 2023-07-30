import {useEffect, useState} from 'react';

import axios from 'axios';

import {ICatalogItemData} from '@modules/common/types';
import {DATA_FILE} from "@utils/const";

const useDataFetching = () => {
	const [dataFetching, setDataFetching] = useState<ICatalogItemData[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(DATA_FILE);
				setDataFetching(response.data);
				setLoading(false);
			} catch (error) {
				console.error(error);
			}
		};

		fetchData().then();
	}, []);

	return {
		dataList: dataFetching,
		loading,
	};
};

export default useDataFetching;

