import { FC } from 'react';

import IconMap from '@modules/icons/components/IconMap';

import { formatPrice } from '@utils/formatters';

import s from './CatalogPageHeader.module.scss';

const CatalogPageHeader: FC<{
	city: string;
	address: string;
	price: number;
	tags: string[];
}> = ({ city, address, price, tags }) => {
	return (
		<>
			<article className={s.heading}>
				<h1 className={s.address}>{address}</h1>
				<p className={s.price}>{formatPrice(price)}</p>
			</article>

			<article className={s.description}>
				<ul className={s.tags}>
					{tags.map((item, i) => (
						<li key={item + i}>{item}</li>
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
