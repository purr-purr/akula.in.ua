import { useState } from 'react';
import Link from 'next/link';

import Pagination from '@modules/common/components/Pagination';

import DATA from '@data/data.json';
import { DYNAMIC_PAGE_CATALOG_NAME } from '@utils/const';

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
				{paginationSortedData.map((item) => (
					<li key={item._id}>
						<Link href={`/${DYNAMIC_PAGE_CATALOG_NAME}/${item._id}`}>
							{item.city + '' + item._id}
						</Link>
					</li>
				))}
			</ul>
			<Pagination data={DATA} onPaginationSorting={handlePaginationSorting} />
		</>
	);
};

export default CatalogList;
