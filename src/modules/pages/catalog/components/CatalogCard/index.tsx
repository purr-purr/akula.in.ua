import {FC} from 'react';
import {useTranslation} from 'react-i18next';
import Image from 'next/image';
import Link from 'next/link';
import cn from 'classnames';

import DefaultPoster from '@modules/common/components/DefaultPoster';
import {
	formatToPrefixAndPrice
} from '@modules/pages/catalogPage/utils/formatters';
import {UNITS} from '@modules/pages/catalogPage/utils/units';
import IconFloorPlan from '@icons/components/IconFloorPlan';
import IconRuler from '@icons/components/IconRuler';

import {
	useCatalogItemFullAddress,
	useCurrencyFetching,
	usePropertyPhoto,
} from '@hooks/index';
import {CATALOG_NAME} from '@utils/const';
import {
	formatCatalogTranslation,
	formatCityTranslation,
} from '@utils/formatters';

import type {ICatalogData} from '@t-types/data';

import s from './CatalogCard.module.scss';

const CatalogCard: FC<{
	props: ICatalogData;
}> = ({props}) => {
	const {
		id,
		contractType,
		propertyType,
		city,
		price,
		address,
		realEstateType,
		table,
		location,
	} = props;

	const {i18n, t: tCommon} = useTranslation('common');
	const {t: tCatalog} = useTranslation('catalog');
	const {currencyRate} = useCurrencyFetching();

	const postersList = usePropertyPhoto(id);
	const fullAddress = useCatalogItemFullAddress(
		realEstateType,
		location,
		address,
	);
	const itemCity = tCommon(formatCityTranslation(city));
	const itemContractType = tCommon(formatCatalogTranslation(contractType));
	const itemPropertyType = tCommon(formatCatalogTranslation(propertyType));
	const itemTotalArea = Number(table.totalArea).toFixed();

	const isRoomsIcon = (table.offices && table.offices !== 'any') || table.rooms;
	return (
		<li className={cn('yellow-shadow', s.container)}>
			<Link className={s.inner} href={`/${CATALOG_NAME}/${id}`}>
				{postersList.length > 0 ? (
					<Image
						className={s.image}
						width={400}
						height={300}
						src={postersList[0].original}
						alt="Photo"
					/>
				) : (
					<DefaultPoster className={s.image}/>
				)}
				<div className={s.info}>
					<ul className={s.tags}>
						<li>{itemContractType}</li>
						<li>{itemPropertyType}</li>
					</ul>
					<h3 className={s.city}>{itemCity}</h3>
					<address className={s.address}>{fullAddress}</address>
					<ul className={s.description}>
						<li>
							{currencyRate &&
								formatToPrefixAndPrice(i18n.language, price, currencyRate)}
						</li>
						{table.totalArea && (
							<li title={tCatalog('TABLE.TOTALAREA')}>
								<IconRuler/>
								{itemTotalArea + ' ' + UNITS[i18n.language].squareMeters}
							</li>
						)}
						{isRoomsIcon && (
							<li
								title={tCatalog(`${table.offices ? 'TABLE.OFFICES' : 'TABLE.ROOMS'}`)}
							>
								<IconFloorPlan/>
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
