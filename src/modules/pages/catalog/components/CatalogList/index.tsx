import { useContext, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CatalogContext } from '@context/CatalogContext';

import BlockTitle from '@modules/common/components/BlockTitle';
import Loader from '@modules/common/components/Loader';
import CatalogCard from '@modules/pages/catalog/components/CatalogCard';
import CatalogPagination from '@modules/pages/catalog/components/CatalogPagination';
import CatalogSort from '@modules/pages/catalog/components/CatalogSort';
import { formatToNumbersOnly } from '@modules/pages/catalogPage/utils/formatters';

import { useDataFetching, useMediaQuery } from '@hooks/index';
import { MOBILE_BREAKPOINT } from '@utils/const';

import type { ICatalogData } from '@t-types/data';

import s from './CatalogList.module.scss';

const CatalogList = () => {
	const { t } = useTranslation('catalog');
	const { filters } = useContext(CatalogContext);
	const isMobile = useMediaQuery(MOBILE_BREAKPOINT);

	const { data, loading } = useDataFetching();

	const [paginationData, setPaginationData] = useState<ICatalogData[]>([]);

	const handlePaginationSorting = (value: ICatalogData[]) => {
		setPaginationData(value);
	};

	const sortedDataList = useMemo(() => {
		const all = 'All';
		const down = 'down';
		const up = 'up';

		return data
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
				const prev = formatToNumbersOnly(a.price);
				const next = formatToNumbersOnly(b.price);
				if (filters.sortByPrice === down) {
					return next - prev;
				} else if (filters.sortByPrice === up) {
					return prev - next;
				} else {
					return 0;
				}
			})
			.sort((a, b) => {
				const prev = Number(a.table.totalArea);
				const next = Number(b.table.totalArea);
				if (filters.sortByTotalArea === down) {
					return next - prev;
				} else if (filters.sortByTotalArea === up) {
					return prev - next;
				} else {
					return 0;
				}
			});
	}, [data, filters]);

	const [sortedData, setSortedData] = useState<ICatalogData[]>(sortedDataList);

	useEffect(() => {
		setSortedData(sortedDataList);
	}, [sortedDataList]);

	return (
		<>
			<div className={s.sort}>
				<div className={s.heading}>
					<BlockTitle
						className={s.headingItem}
						title={t('CATALOG.SEARCH_RESULTS')}
					/>
					<span className={s.headingCounter}>
						: {sortedData.length} {!isMobile && t('OBJECTS')}
					</span>
				</div>
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
