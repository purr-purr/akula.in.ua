import { useState } from 'react';

import Loader from '@modules/common/components/Loader';
import CatalogCard from '@modules/pages/catalog/components/CatalogCard';
import CatalogPagination from '@modules/pages/catalog/components/CatalogPagination';

import type { ICatalogData } from '@modules/common/types';

import s from './CatalogList.module.scss';

const CatalogList = () => {
	const [paginationSortedData, setPaginationSortedData] = useState<
		ICatalogData[]
	>([]);

	const handlePaginationSorting = (value: ICatalogData[]) => {
		setPaginationSortedData(value);
	};

	return (
		<>
			<ul className={s.container}>
				{paginationSortedData.length !== 0 ? (
					paginationSortedData.map((item: ICatalogData) => (
						<CatalogCard key={item.id} props={item} />
					))
				) : (
					<Loader />
				)}
			</ul>
			<CatalogPagination onPaginationSorting={handlePaginationSorting} />
		</>
	);
};

export default CatalogList;
