import { useTranslation } from 'react-i18next';
import Image from 'next/image';

import CardSlider from '@modules/common/components/CardSlider';

import { useMediaQuery } from '@hooks/index';
import {
	LAPTOP_BREAKPOINT,
	MOBILE_BREAKPOINT,
	TABLET_BREAKPOINT,
} from '@utils/const';

import STUDIO_95 from './assets/95_animation_studio.png';
import BAT from './assets/bat.png';
import CHERRYMALL from './assets/cherrymall.png';
import ENERGY_SOLUTION from './assets/energy_solutions.png';
import GRAND_STEP from './assets/grand_step.png';
import MARMELAD from './assets/marmelad.png';

import s from './HomePartners.module.scss';

const Partners = () => {
	const partnersList = [
		STUDIO_95,
		CHERRYMALL,
		MARMELAD,
		BAT,
		ENERGY_SOLUTION,
		GRAND_STEP,
	];
	const { t } = useTranslation('common');
	const isMobile = useMediaQuery(MOBILE_BREAKPOINT);
	const isTablet = useMediaQuery(TABLET_BREAKPOINT);
	const isLaptop = useMediaQuery(LAPTOP_BREAKPOINT);
	const slidesToShow = isMobile ? 2 : isTablet ? 3 : isLaptop ? 4 : 5;

	return (
		<CardSlider
			frameClassName={s.container}
			withoutControls
			childrenClassName={s.item}
			slidesToShow={slidesToShow}
			dragging={false}
			autoplay={true}
		>
			{partnersList.map((item, i) => (
				<Image key={i} src={item} alt={t('IMAGE')} />
			))}
		</CardSlider>
	);
};

export default Partners;
