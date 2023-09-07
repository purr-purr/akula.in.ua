import { useTranslation } from 'react-i18next';
import Image from 'next/image';

import CardSlider from '@modules/common/components/CardSlider';

import STUDIO_95 from '../../assets/HomePartners/95_animation_studio.png';
import BAT from '../../assets/HomePartners/bat.png';
import CHERRYMALL from '../../assets/HomePartners/cherrymall.png';
import ENERGY_SOLUTION from '../../assets/HomePartners/energy_solutions.png';
import GRAND_STEP from '../../assets/HomePartners/grand_step.png';
import MARMELAD from '../../assets/HomePartners/marmelad.png';
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

	return (
		<CardSlider
			frameClassName={s.container}
			withoutControls
			childrenClassName={s.item}
			slidesToShow={5}
			dragging={false}
			autoplay
		>
			{partnersList.map((item, i) => (
				<Image key={i} src={item} alt={t('IMAGE')} />
			))}
		</CardSlider>
	);
};

export default Partners;
