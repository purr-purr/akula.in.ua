import { useState } from 'react';

import CatalogCard from '@modules/catalog/components/CatalogCard';
import Pagination from '@modules/common/components/Pagination';

import s from './CatalogList.module.scss';

import { ICatalogItemData } from '@modules/common/types';

const CatalogList = () => {
	const [paginationSortedData, setPaginationSortedData] = useState<
		ICatalogItemData[]
	>([]);

	const handlePaginationSorting = (value: ICatalogItemData[]) => {
		setPaginationSortedData(value);
	};

	return (
		<>
			<ul className={s.container}>
				{paginationSortedData.map((item: ICatalogItemData) => (
					<CatalogCard key={item._id} props={item} />
				))}
			</ul>
			<Pagination onPaginationSorting={handlePaginationSorting} />
		</>
	);
};

export default CatalogList;
