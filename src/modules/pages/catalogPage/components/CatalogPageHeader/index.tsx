import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { formatToPrefixAndPrice } from '@modules/pages/catalogPage/utils/formatters';
import IconMap from '@icons/components/IconMap';

import { useCurrencyFetching } from '@hooks/index';
import { formatCatalogTranslation } from '@utils/formatters';

import s from './CatalogPageHeader.module.scss';

const CatalogPageHeader: FC<{
	city: string;
	address: string;
	price: string;
	tags: string[];
}> = ({ city, address, price, tags }) => {
	const { t, i18n } = useTranslation('common');
	const { currencyRate } = useCurrencyFetching();

	const finalPrice = currencyRate
		? formatToPrefixAndPrice(i18n.language, price, currencyRate)
		: '-';

	return (
		<>
			<article className={s.heading}>
				<h1 className={s.address}>{address}</h1>
				<p className={s.price}>{finalPrice}</p>
			</article>

			<article className={s.description}>
				<ul className={s.tags}>
					{tags.map((item, i) => (
						<li key={item + i}>{t(formatCatalogTranslation(item))}</li>
					))}
				</ul>

				<p className={s.city}>
					<IconMap />
					{city}
				</p>
			</article>
		</>
	);
};

export default CatalogPageHeader;
