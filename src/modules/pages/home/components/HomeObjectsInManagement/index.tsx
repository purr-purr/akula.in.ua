import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import Link from 'next/link';

import BlockTitle from '@modules/common/components/BlockTitle';
import CardSlider from '@modules/common/components/CardSlider';

import { APP } from '@utils/const';

import s from './HomeObjectsInManagement.module.scss';

const HomeObjectsInManagement = () => {
	const { t: tHome } = useTranslation('home');
	const { t: tCommon } = useTranslation('common');

	const getImagePath = (value: string) => {
		return require(`../../assets/HomeObjectsInManagement/${value.toLowerCase()}.jpg`)
			.default;
	};

	const list = [
		{ text: 'BUSINESS_CENTERS', counter: 7 },
		{ text: 'SHOPPING_MALLS', counter: 5 },
		{ text: 'MARKETPLACES', counter: 0 },
		{ text: 'OFFICE_SPACES', counter: 11 },
		{ text: 'HOUSES_AND_APARTMENTS', counter: 2 },
		{ text: 'LAND_PLOTS', counter: 2224 },
		{ text: 'WAREHOUSE_FACILITIES', counter: 0 },
	];

	return (
		<section className={s.container}>
			<BlockTitle title={tHome('OBJECTS_IN_MANAGEMENT.OBJECTS_IN_MANAGEMENT')} />
			<CardSlider>
				{list.map((item) => (
					<Link href={`/${APP.CATALOG_NAME}`} className={s.item} key={item.text}>
						<Image src={getImagePath(item.text)} alt={tCommon('IMAGE')} />
						<div>
							<p className={s[`item-text`]}>
								{tCommon(`TYPE_OF_REAL_ESTATE.${item.text}`)}
							</p>
							{item.counter > 0 && (
								<p className={s[`item-counter`]}>
									{item.counter + ' ' + tHome('OBJECTS_IN_MANAGEMENT.IN_THE_LIST')}
								</p>
							)}
						</div>
					</Link>
				))}
			</CardSlider>
		</section>
	);
};

export default HomeObjectsInManagement;
