import { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CatalogContext } from '@context/CatalogContext';

import IconCross from '@modules/icons/components/IconCross';
import IconPriceDown from '@modules/icons/components/IconPriceDown';
import IconPriceUp from '@modules/icons/components/IconPriceUp';

import { initialFilters } from '@utils/filters';

import type { SortByPriceType } from '@t-types/filters';

import s from './CatalogSort.module.scss';

const CatalogSort = () => {
	const { t } = useTranslation('catalog');
	const { filters, handleFilters } = useContext(CatalogContext);
	const [sortByPrice, setSortByPrice] = useState<SortByPriceType>('default');

	const handleClearAllFilters = () => {
		handleFilters(initialFilters);
	};

	const handlePriceSorting = () => {
		setSortByPrice(sortByPrice === 'up' ? 'down' : 'up');
	};

	useEffect(() => {
		handleFilters({
			...filters,
			sortByPrice,
		});
		// eslint-disable-next-line
	}, [sortByPrice]);

	return (
		<aside className={s.container}>
			<button className={s.clean} onClick={handleClearAllFilters}>
				{t('CATALOG.CLEAR_ALL_FILTERS')}
				<IconCross />
			</button>
			<button className={s.price} onClick={handlePriceSorting}>
				{sortByPrice === 'up' ? <IconPriceUp /> : <IconPriceDown />}
			</button>
		</aside>
	);
};

export default CatalogSort;
