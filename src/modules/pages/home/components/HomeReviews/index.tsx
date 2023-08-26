import { useTranslation } from 'react-i18next';

import BlockTitle from '@modules/common/components/BlockTitle';
import CardSlider from '@modules/common/components/CardSlider';

import s from './HomeReviews.module.scss';

const HomeReviews = () => {
	const { t } = useTranslation('home');

	return (
		<section className={s.container}>
			<BlockTitle title={t('REVIEWS.FEEDBACK_ABOUT_COOPERATION')} />

			<CardSlider>
				<div>1</div>
				<div>2</div>
				<div>3</div>
				<div>41</div>
				<div>421</div>
			</CardSlider>
		</section>
	);
};

export default HomeReviews;
