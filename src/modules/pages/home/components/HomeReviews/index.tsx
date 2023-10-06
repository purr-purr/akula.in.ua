import { Fragment } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import Image from 'next/image';
import cn from 'classnames';
import { v4 as uniqueId } from 'uuid';

import BlockTitle from '@modules/common/components/BlockTitle';
import CardSlider from '@modules/common/components/CardSlider';
import STAR_ICON from '@modules/pages/home/components/HomeReviews/assets/star_icon.svg';

import { useMediaQuery } from '@hooks/index';
import { LAPTOP_BREAKPOINT, TABLET_BREAKPOINT } from '@utils/const';

import s from './HomeReviews.module.scss';

const HomeReviews = () => {
	const { t } = useTranslation('home');
	const isTablet = useMediaQuery(TABLET_BREAKPOINT);
	const isLaptop = useMediaQuery(LAPTOP_BREAKPOINT);
	const slidesToShow = isTablet ? 1 : isLaptop ? 2 : 3;

	const CASES = [
		{
			name: 'BAT_UKRAINE',
			color: 'gray',
		},
		{
			name: 'EKOL_LOGISTICS',
			color: 'blue',
		},
		{
			name: 'ENERGY_SOLUTIONS',
			color: 'darkBlue',
		},
		{
			name: 'ANIMATION_STUDIO_95',
			color: 'gray',
		},
		{
			name: 'MUZVAR',
			color: 'blue',
		},
		{
			name: 'APPLIANCES_FOR_BUSINESS',
			color: 'darkBlue',
		},
	];

	return (
		<section className={s.container}>
			<BlockTitle title={t('REVIEWS.FEEDBACK_ABOUT_COOPERATION')} />

			<CardSlider
				frameClassName={s.frame}
				adaptiveHeight={isTablet}
				dragging={false}
				childrenClassName={s.card}
				slidesToShow={slidesToShow}
			>
				{CASES.map((item) => {
					return (
						<Fragment key={uniqueId()}>
							<div className={cn(s.text, s[item.color])}>
								<p>
									<Trans t={t} i18nKey={`REVIEWS.${item.name}_TEXT`}>
										<br />
									</Trans>
								</p>
							</div>
							<p className={s.signature}>{t(`REVIEWS.${item.name}_TITLE`)}</p>
							<ul className={s.rating}>
								{[...Array(5)].map((_) => (
									<li key={uniqueId()}>
										<Image src={STAR_ICON} alt="Rating Star" />
									</li>
								))}
							</ul>
						</Fragment>
					);
				})}
			</CardSlider>
		</section>
	);
};

export default HomeReviews;
