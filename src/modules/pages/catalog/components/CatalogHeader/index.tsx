import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

import { useMediaQuery } from '@hooks/index';
import {
	LAPTOP_BREAKPOINT,
	MOBILE_BREAKPOINT,
	TABLET_BREAKPOINT,
} from '@utils/const';

import BACKGROUND_IMG_MOBILE from './assets/background-building--mobile.png';
import BACKGROUND_IMG from './assets/background-building.png';

import s from './CatalogHeader.module.scss';

const CatalogHeader: FC = () => {
	const { t } = useTranslation('catalog');
	const isLaptop = useMediaQuery(LAPTOP_BREAKPOINT);
	const isMobile = useMediaQuery(MOBILE_BREAKPOINT);

	return (
		<section className={s.container}>
			<h1>{t('CATALOG.CHOOSE_THE_PERFECT_PROPERTY')}</h1>
			{!isMobile && (
				<Image
					className={s.background}
					src={isLaptop ? BACKGROUND_IMG_MOBILE : BACKGROUND_IMG}
					alt="Background image"
				/>
			)}
		</section>
	);
};

export default CatalogHeader;
