import { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CatalogContext } from '@context/CatalogContext';

import IconCross from '@icons/components/IconCross';
import IconPriceDown from '@icons/components/IconPriceDown';
import IconPriceUp from '@icons/components/IconPriceUp';
import IconTotalAreaDown from '@icons/components/IconTotalAreaDown';
import IconTotalAreaUp from '@icons/components/IconTotalAreaUp';

import { initialFilters } from '@utils/filters';

import type { SortByItemType } from '@t-types/filters';

import s from './CatalogSort.module.scss';

interface ISortByType {
	price: SortByItemType;
	totalArea: SortByItemType;
}

const CatalogSort = () => {
	const { t } = useTranslation('catalog');
	const { filters, handleFilters } = useContext(CatalogContext);

	const sortByInitialState = {
		price: 'default',
		totalArea: 'default',
	};

	const [sortBy, setSortBy] = useState<ISortByType>(sortByInitialState);

	const handleClearAllFilters = () => {
		handleFilters(initialFilters);
		setSortBy(sortByInitialState);
	};

	const handleSorting = (key: keyof ISortByType) => {
		setSortBy((prevSortBy) => ({
			...prevSortBy,
			[key === 'price' ? 'totalArea' : 'price']: 'default',
			[key]: prevSortBy[key] === 'up' ? 'down' : 'up',
		}));
	};

	useEffect(() => {
		handleFilters({
			...filters,
			sortByPrice: sortBy.price,
			sortByTotalArea: sortBy.totalArea,
		});

		// eslint-disable-next-line
	}, [sortBy.price, sortBy.totalArea]);

	return (
		<aside className={s.container}>
			<button className={s.clean} onClick={handleClearAllFilters}>
				{t('CATALOG.CLEAR_ALL_FILTERS')}
				<IconCross />
			</button>
			<button
				title={t('CATALOG.SORTING_BY_TOTAL_AREA')}
				className={s.iconButton}
				onClick={() => handleSorting('totalArea')}
			>
				{sortBy.totalArea === 'up' ? <IconTotalAreaUp /> : <IconTotalAreaDown />}
			</button>
			<button
				title={t('CATALOG.SORTING_BY_PRICE')}
				className={s.iconButton}
				onClick={() => handleSorting('price')}
			>
				{sortBy.price === 'up' ? <IconPriceUp /> : <IconPriceDown />}
			</button>
		</aside>
	);
};

export default CatalogSort;
