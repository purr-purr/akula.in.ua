import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { formatTranslation } from '@utils/formatters';

import type { ITransVersion } from '@modules/common/types';

import s from './CatalogPageHeader.module.scss';

const CatalogPageHeader: FC<{
	city: string;
	address: ITransVersion;
	price: number;
	tags: string[];
}> = ({ city, address, price, tags }) => {
	const { i18n } = useTranslation();

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
			<h2 className={s.address}>{formatTranslation(i18n.language, address)}</h2>
			<h3 className={s.price}>{price}</h3>
		</article>
	);
};

export default CatalogPageHeader;
