import { FC } from 'react';
import Link from 'next/link';

import { APP } from '@utils/const';

import type { ICatalogData } from '@modules/common/types';

import s from './CatalogCard.module.scss';

const CatalogCard: FC<{
	props: ICatalogData;
}> = ({ props }) => {
	return (
		<li className={s.container}>
			<Link className={s.inner} href={`/${APP.CATALOG_NAME}/${props.id}`}>
				<div className={s.image}>{/*<Image src={'/'} alt="" />*/}</div>

				<div className={s.info}>
					{props.city + ' - ' + props.id + ' - ' + props.price}
				</div>
			</Link>
		</li>
	);
};

export default CatalogCard;
