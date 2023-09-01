import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import Link from 'next/link';
import cn from 'classnames';

import DefaultPoster from '@modules/common/components/DefaultPoster';
import { usePropertyPhoto } from '@modules/common/hooks/index';
import IconFloorPlan from '@modules/icons/components/IconFloorPlan';
import IconRuler from '@modules/icons/components/IconRuler';

import { APP } from '@utils/const';
import {
	formatCatalogTranslation,
	formatCityTranslation,
	formatPrice,
} from '@utils/formatters';

import type { ICatalogData } from '@modules/common/types';

import useFullAddress from '../../../../common/hooks/useFullAddress';
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

	const { t } = useTranslation('common');
	const postersList = usePropertyPhoto(id);
	const itemCity = t(formatCityTranslation(city));
	const itemContractType = t(formatCatalogTranslation(contract_type));
	const itemPropertyType = t(formatCatalogTranslation(property_type));
	const fullAddress = useFullAddress(real_estate_type, location, address);

	return (
		<li className={cn('yellow-shadow', s.container)}>
			<Link className={s.inner} href={`/${APP.CATALOG_NAME}/${id}`}>
				{postersList.length > 0 ? (
					<Image
						className={s.image}
						width={400}
						height={300}
						src={postersList[0]?.original}
						alt=""
					/>
				) : (
					<DefaultPoster className={s.image} />
				)}
				<div className={s.info}>
					<ul className={s.tags}>
						<li>{itemContractType}</li>
						<li>{itemPropertyType}</li>
					</ul>
					<h3 className={s.city}>{itemCity}</h3>
					<address className={s.address}>{fullAddress}</address>
					<ul className={s.description}>
						<li>{formatPrice(price)}</li>
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
