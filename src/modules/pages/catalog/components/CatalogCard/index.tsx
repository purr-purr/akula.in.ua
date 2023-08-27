import { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import cn from 'classnames';

import IconFloorPlan from '@modules/icons/components/IconFloorPlan';
import IconRuler from '@modules/icons/components/IconRuler';

import { APP } from '@utils/const';

import type { ICatalogData } from '@modules/common/types';

import usePropertyPhoto from '../../../../common/hooks/usePropertyPhoto';
import s from './CatalogCard.module.scss';

const CatalogCard: FC<{
	props: ICatalogData;
}> = ({ props }) => {
	const postersList = usePropertyPhoto(props.id);

	const tableInfo = props.table?.reduce((acc, obj) => {
		const key = Object.keys(obj)[0];
		acc[key] = obj[key];
		return acc;
	}, {});

	return (
		<li className={cn('yellow-shadow', s.container)}>
			<Link className={s.inner} href={`/${APP.CATALOG_NAME}/${props.id}`}>
				{postersList[0] && (
					<Image
						className={s.image}
						width={400}
						height={300}
						src={postersList[0].original}
						alt=""
					/>
				)}
				<div className={s.info}>
					<ul className={s.tags}>
						<li>{props.contract_type}</li>
						<li>{props.property_type}</li>
					</ul>
					<h3 className={s.city}>{props.city}</h3>
					<address className={s.address}>
						{props.real_estate_type} по {props.address}
					</address>
					<ul className={s.description}>
						<li>{props.price}$</li>
						{tableInfo?.table_total_area && (
							<li>
								<IconFloorPlan />
								{tableInfo.table_total_area}
							</li>
						)}
						{tableInfo?.table_offices && (
							<li>
								<IconRuler />
								{tableInfo.table_offices}
							</li>
						)}
					</ul>
				</div>
			</Link>
		</li>
	);
};

export default CatalogCard;
