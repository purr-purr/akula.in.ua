import { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CatalogContext } from '@context/CatalogContext';

import BlockTitle from '@modules/common/components/BlockTitle';
import Loader from '@modules/common/components/Loader';
import CatalogCard from '@modules/pages/catalog/components/CatalogCard';
import CatalogPagination from '@modules/pages/catalog/components/CatalogPagination';
import CatalogSort from '@modules/pages/catalog/components/CatalogSort';
import { cleanLetters } from '@modules/pages/catalogPage/utils/formatters';

import { useDataFetching } from '@hooks/index';

import type { ICatalogData } from '@t-types/data';

import s from './CatalogList.module.scss';

const CatalogList = () => {
	const { t } = useTranslation('catalog');
	const { filters } = useContext(CatalogContext);
	const { data, loading } = useDataFetching();

	const [sortedData, setSortedData] = useState<ICatalogData[]>([]);
	const [paginationData, setPaginationData] = useState<ICatalogData[]>([]);

	useEffect(() => {
		sortData();
	}, [data, filters]);

	const handlePaginationSorting = (value: ICatalogData[]) => {
		setPaginationData(value);
	};

	const sortData = () => {
		const all = 'All';
		const sortedData = data
			.filter(
				(item) =>
					filters.contractType === item.contractType &&
					(filters.city === all || item.city === filters.city) &&
					(filters.propertyType === all ||
						item.propertyType === filters.propertyType) &&
					(filters.realEstateType === all ||
						item.realEstateType === filters.realEstateType),
			)
			.sort((a, b) => {
				const prev = Number(cleanLetters(a.price));
				const next = Number(cleanLetters(b.price));
				{
					if (filters.sortByPrice === 'down') {
						return next - prev;
					} else if (filters.sortByPrice === 'up') {
						return prev - next;
					} else {
						return 0;
					}
				}
			});
		setSortedData(sortedData);
	};

	return (
		<>
			<div className={s.sort}>
				<BlockTitle className={s.title} title={t('CATALOG.SEARCH_RESULTS')} />
				<span className={s.counter}>
					: {sortedData.length} {t('OBJECTS')}
				</span>
				<CatalogSort />
			</div>

			{loading ? (
				<Loader className={s.loader} type="described" />
			) : (
				<>
					{paginationData.length !== 0 ? (
						<ul className={s.container}>
							{paginationData.map((item: ICatalogData) => (
								<CatalogCard key={item.id} props={item} />
							))}
						</ul>
					) : (
						<p className={s.notFound}>{t('UNFORTUNATELY_NOTHING_WAS_FOUND')}</p>
					)}
				</>
			)}

			<CatalogPagination
				data={sortedData}
				onPaginationSorting={handlePaginationSorting}
			/>
		</>
	);
};

export default CatalogList;
