import { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import IconCross from '@modules/icons/components/IconCross';
import IconPriceDown from '@modules/icons/components/IconPriceDown';
import IconPriceUp from '@modules/icons/components/IconPriceUp';
import { CatalogContext } from '@modules/layout/context/CatalogContext';

import { initialFilters, SortByPriceType } from '@utils/filters';

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
	}, [sortByPrice]);

	return (
		<>
			<button className={s.clean} onClick={handleClearAllFilters}>
				{t('CATALOG.CLEAR_ALL_FILTERS')}
				<IconCross />
			</button>
			<button className={s.price} onClick={handlePriceSorting}>
				{sortByPrice === 'up' ? <IconPriceUp /> : <IconPriceDown />}
			</button>
		</>
	);
};

export default CatalogSort;
