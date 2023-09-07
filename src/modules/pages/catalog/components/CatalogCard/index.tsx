import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import Link from 'next/link';
import cn from 'classnames';

import DefaultPoster from '@modules/common/components/DefaultPoster';
import IconFloorPlan from '@modules/icons/components/IconFloorPlan';
import IconRuler from '@modules/icons/components/IconRuler';
import { formatToFullPriceWithPrefix } from '@modules/pages/catalogPage/utils/formatters';
import { UNITS } from '@modules/pages/catalogPage/utils/units';

import { useFullAddress, usePropertyPhoto } from '@hooks/index';
import { APP } from '@utils/const';
import {
	formatCatalogTranslation,
	formatCityTranslation,
} from '@utils/formatters';

import type { ICatalogData } from '@global-types/index';

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

	const { i18n, t: tCommon } = useTranslation('common');
	const { t: tCatalog } = useTranslation('catalog');
	const postersList = usePropertyPhoto(id);
	const fullAddress = useFullAddress(real_estate_type, location, address);
	const itemCity = tCommon(formatCityTranslation(city));
	const itemContractType = tCommon(formatCatalogTranslation(contract_type));
	const itemPropertyType = tCommon(formatCatalogTranslation(property_type));
	const itemTotalArea = Number(table.total_area).toFixed();

	const isRoomsIcon = (table.offices && table.offices !== 'any') || table.rooms;
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
						<li>{formatToFullPriceWithPrefix(i18n.language, price)}</li>
						{table.total_area && (
							<li title={tCatalog('TABLE.TOTAL_AREA')}>
								<IconRuler />
								{itemTotalArea + ' ' + UNITS[i18n.language].squareMeters}
							</li>
						)}
						{isRoomsIcon && (
							<li
								title={tCatalog(`${table.offices ? 'TABLE.OFFICES' : 'TABLE.ROOMS'}`)}
							>
								<IconFloorPlan />
								{table.offices || table.rooms}
							</li>
						)}
					</ul>
				</div>
			</Link>
		</li>
	);
};

export default CatalogCard;
