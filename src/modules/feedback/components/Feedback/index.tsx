import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import cn from 'classnames';

import BlockTitle from '@modules/common/components/BlockTitle';
import FeedbackForm from '@modules/feedback/components/FeedbackForm';

import { useMediaQuery } from '@hooks/index';
import { TABLET_BREAKPOINT } from '@utils/const';

import BLUE_BUILDING from './assets/blue-building.png';
import YELLOW_BUILDING from './assets/yellow-building.png';

import s from './Feedback.module.scss';

const Feedback: FC<{
	type: 'owner' | 'cooperation';
}> = ({ type = 'owner' }) => {
	const { t } = useTranslation('common');
	const isTablet = useMediaQuery(TABLET_BREAKPOINT);

	const info = {
		owner: {
			title: t('FEEDBACK.DO_YOU_OWN_REAL_ESTATE'),
			desc: t('FEEDBACK.COOPERATION_WITH_THE_AKULA'),
		},
		cooperation: {
			title: t('FEEDBACK.INTERESTED_IN_COOPERATION'),
			desc: t('FEEDBACK.TO_LEARN_MORE_DETAILS_ABOUT_OUR_SERVICES_DESC'),
		},
	};

	return (
		<section className={cn(s.container, 'nude-bg')}>
			<article className={cn(s.inner, type === 'owner' && s.reverse)}>
				<BlockTitle title={info[type].title} />
				<p className={s.description}>{info[type].desc}</p>
				<FeedbackForm />
			</article>

			{!isTablet && (
				<Image
					className={cn(s.poster, type === 'owner' && s.reverse)}
					src={type === 'cooperation' ? BLUE_BUILDING : YELLOW_BUILDING}
					alt="Poster"
				/>
			)}
		</section>
	);
};

export default Feedback;
