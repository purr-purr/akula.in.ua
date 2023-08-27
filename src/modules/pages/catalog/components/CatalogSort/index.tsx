import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import IconCross from '@modules/icons/components/IconCross';
import IconPriceDown from '@modules/icons/components/IconPriceDown';
import IconPriceUp from '@modules/icons/components/IconPriceUp';

import s from './CatalogSort.module.scss';

const CatalogSort = () => {
	const { t } = useTranslation('catalog');
	const [isPriceUp, setIsPriceUp] = useState(true);
	return (
		<>
			<button className={s.clean}>
				{t('CATALOG.SEARCH_RESULTS')}
				<IconCross />
			</button>
			<button className={s.price} onClick={() => setIsPriceUp(!isPriceUp)}>
				{isPriceUp ? <IconPriceUp /> : <IconPriceDown />}
			</button>
		</>
	);
};

export default CatalogSort;
