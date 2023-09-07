import { useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import cn from 'classnames';

import BlockTitle from '@modules/common/components/BlockTitle';
import CardSlider from '@modules/common/components/CardSlider';
import IconArrowUp from '@modules/icons/components/IconArrowUp';
import { CatalogContext } from '@modules/layout/context/CatalogContext';

import { useDataFetching } from '@hooks/index';
import { APP } from '@utils/const';

import s from './HomeObjectsInManagement.module.scss';

const HomeObjectsInManagement = () => {
	const { t: tHome } = useTranslation('home');
	const { t: tCommon } = useTranslation('common');
	const { data } = useDataFetching();
	const router = useRouter();
	const { filters, handleFilters } = useContext(CatalogContext);

	const getAmountItems = (value: string) => {
		return data.filter((item) =>
			item.realEstateType.toLowerCase().includes(value.toLowerCase()),
		).length;
	};

	const getImagePath = (value: string) => {
		return require(`../../assets/HomeObjectsInManagement/${value.toLowerCase()}.jpg`)
			.default;
	};

	const handleCardClick = (value: string) => {
		router.push('/catalog').then();
		handleFilters({
			...filters,
			realEstateType: value,
		});
	};

	const objectsInManagement = [
		{ text: 'APARTMENTS', filter: 'Квартира' },
		{ text: 'HOUSES', filter: 'Будинок' },
		{ text: 'NEW_BUILDING', filter: 'Новобудова' },
		{ text: 'OFFICE_SPACES', filter: 'Офіс' },
		{
			text: 'PREMISES_FOR_ANY_TYPE_OF_ACTIVITY',
			filter: 'Приміщення під будь-який вид діяльності',
		},
		{ text: 'MARKETPLACES', filter: 'Торгова площа' },
		{ text: 'WAREHOUSE_FACILITIES', filter: 'Складське приміщення' },
		{ text: 'LAND_PLOTS', filter: 'Земля' },
	];

	return (
		<section className={s.container}>
			<div className={s.heading}>
				<BlockTitle title={tHome('OBJECTS_IN_MANAGEMENT.OBJECTS_IN_MANAGEMENT')} />
				<Link className={s.headingButton} href={`/${APP.CATALOG_NAME}`}>
					{tCommon('NAVIGATION.ALL_REAL_ESTATE')}
					<IconArrowUp />
				</Link>
			</div>
			<CardSlider>
				{objectsInManagement.map((item) => {
					const itemAmount = getAmountItems(item.filter);
					return (
						<Link
							href={`/${APP.CATALOG_NAME}`}
							className={cn('yellow-shadow', s.item)}
							key={item.text}
							onClick={() => handleCardClick(item.filter)}
						>
							<Image src={getImagePath(item.text)} alt={tCommon('IMAGE')} />
							<div>
								<p className={s[`item-text`]}>
									{tCommon(`TYPE_OF_REAL_ESTATE.${item.text}`)}
								</p>
								{itemAmount > 0 && (
									<p className={s[`item-counter`]}>
										{itemAmount + ' ' + tHome('OBJECTS_IN_MANAGEMENT.IN_THE_LIST')}
									</p>
								)}
							</div>
						</Link>
					);
				})}
			</CardSlider>
		</section>
	);
};

export default HomeObjectsInManagement;
