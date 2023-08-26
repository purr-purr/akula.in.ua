import { useTranslation } from 'react-i18next';
import Image from 'next/image';

import CardSlider from '@modules/common/components/CardSlider';

import POSTER from '../../assets/HomePartners/1.png';
import s from './HomePartners.module.scss';

const Partners = () => {
	const partnersList = [POSTER, POSTER, POSTER, POSTER];
	const { t } = useTranslation('common');

	return (
		<CardSlider
			frameClassName={s.container}
			withoutControls
			childrenClassName={s.item}
		>
			{partnersList.map((item, i) => (
				<Image key={i} src={item} alt={t('IMAGE')} />
			))}
		</CardSlider>
	);
};

export default Partners;
