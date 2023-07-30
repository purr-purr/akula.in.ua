import { FC } from 'react';

import s from './CatalogPageHeader.module.scss';

const CatalogPageHeader: FC<{
	city: string;
	address: string;
	price: string;
	tags: string[];
}> = ({ city, address, price, tags }) => {
	return (
		<article className={s.container}>
			<div className={s.heading}>
				<h1>{city}</h1>
				<ul className={s.tags}>
					{tags.map((item, i) => (
						<li key={item + i}>{item}</li>
					))}
				</ul>
			</div>
			<h2 className={s.address}>{address}</h2>
			<h3 className={s.price}>{price}</h3>
		</article>
	);
};

export default CatalogPageHeader;
