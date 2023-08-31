import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import IconMap from '@modules/icons/components/IconMap';

import { formatCatalogTranslation, formatPrice } from '@utils/formatters';

import s from './CatalogPageHeader.module.scss';

const CatalogPageHeader: FC<{
	city: string;
	address: string;
	price: number;
	tags: string[];
}> = ({ city, address, price, tags }) => {
	const { t } = useTranslation('common');
	return (
		<>
			<article className={s.heading}>
				<h1 className={s.address}>{address}</h1>
				<p className={s.price}>{formatPrice(price)}</p>
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
