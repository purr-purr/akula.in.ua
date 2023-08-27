import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

import BACKGROUND_IMG from '../../assets/CatalogHeader/background-building.png';
import s from './CatalogHeader.module.scss';

const CatalogHeader: FC = () => {
	const { t } = useTranslation('catalog');
	return (
		<section className={s.container}>
			<h1>{t('CATALOG.CHOOSE_THE_PERFECT_PROPERTY')}</h1>
			<Image className={s.background} src={BACKGROUND_IMG} alt={''} />
		</section>
	);
};

export default CatalogHeader;
