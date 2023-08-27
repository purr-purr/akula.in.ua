import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import BlockTitle from '@modules/common/components/BlockTitle';
import Loader from '@modules/common/components/Loader';
import CatalogCard from '@modules/pages/catalog/components/CatalogCard';
import CatalogPagination from '@modules/pages/catalog/components/CatalogPagination';
import CatalogSort from '@modules/pages/catalog/components/CatalogSort';

import type { ICatalogData } from '@modules/common/types';

import s from './CatalogList.module.scss';

const CatalogList = () => {
	const { t } = useTranslation('catalog');

	const [paginationSortedData, setPaginationSortedData] = useState<
		ICatalogData[]
	>([]);

	const handlePaginationSorting = (value: ICatalogData[]) => {
		setPaginationSortedData(value);
	};

	return (
		<>
			<div className={s.sort}>
				<BlockTitle title={t('CATALOG.SEARCH_RESULTS')} />
				<CatalogSort />
			</div>
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
