import {useState} from 'react';

import CatalogCard from '@modules/catalog/components/CatalogCard';
import CatalogPagination from '@modules/catalog/components/CatalogPagination';

import s from './CatalogList.module.scss';

import type {ICatalogItemData} from '@modules/common/types';

const CatalogList = () => {
	const [paginationSortedData, setPaginationSortedData] = useState<ICatalogItemData[]>([]);

	const handlePaginationSorting = (value: ICatalogItemData[]) => {
		setPaginationSortedData(value);
	};

	return (
		<>
			<ul className={s.container}>
				{paginationSortedData.map((item: ICatalogItemData) => (
					<CatalogCard key={item._id} props={item}/>
				))}
			</ul>
			<CatalogPagination onPaginationSorting={handlePaginationSorting}/>
		</>
	);
};

export default CatalogList;
