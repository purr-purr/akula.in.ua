import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import Link from 'next/link';
import cn from 'classnames';

import IconFloorPlan from '@modules/icons/components/IconFloorPlan';
import IconRuler from '@modules/icons/components/IconRuler';

import { APP } from '@utils/const';
import { formatTranslation } from '@utils/formatters';

import type { ICatalogData } from '@modules/common/types';

import usePropertyPhoto from '../../../../common/hooks/usePropertyPhoto';
import s from './CatalogCard.module.scss';

const CatalogCard: FC<{
	props: ICatalogData;
}> = ({ props }) => {
	const {
		id,
		contract_type,
		property_type,
		city,
		price,
		address,
		real_estate_type,
		table,
		location,
	} = props;

	const postersList = usePropertyPhoto(id);
	const { i18n } = useTranslation();

	return (
		<li className={cn('yellow-shadow', s.container)}>
			<Link className={s.inner} href={`/${APP.CATALOG_NAME}/${id}`}>
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
						<li>{contract_type}</li>
						<li>{property_type}</li>
					</ul>
					<h3 className={s.city}>{city}</h3>
					<address className={s.address}>
						{real_estate_type} в {formatTranslation(i18n.language, location)} по{' '}
						{formatTranslation(i18n.language, address)}
					</address>
					<ul className={s.description}>
						<li>{price}$</li>
						{table.total_area && (
							<li>
								<IconFloorPlan />
								{table.total_area}
							</li>
						)}
						{table.offices && (
							<li>
								<IconRuler />
								{table.offices}
							</li>
						)}
					</ul>
				</div>
			</Link>
		</li>
	);
};

export default CatalogCard;
