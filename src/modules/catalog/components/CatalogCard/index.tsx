import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { DYNAMIC_PAGE_CATALOG_NAME } from '@utils/const';

import s from './CatalogCard.module.scss';

import { ICatalogItemData } from '@modules/common/types';

const CatalogCard: FC<{
	props: ICatalogItemData;
}> = ({ props }) => {
	return (
		<li className={s.container}>
			<Link
				className={s.inner}
				href={`/${DYNAMIC_PAGE_CATALOG_NAME}/${props._id}`}
			>
				<div className={s.image}>
					<Image src={''} alt="" />
				</div>

				<div className={s.info}>
					{props.city + ' - ' + props._id + ' - ' + props.price}
				</div>
			</Link>
		</li>
	);
};

export default CatalogCard;
