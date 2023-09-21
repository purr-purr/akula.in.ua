import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

import BlockTitle from '@modules/common/components/BlockTitle';
import FeedbackForm from '@modules/feedback/components/FeedbackForm';
import IconCross from '@icons/components/IconCross';

import { useMediaQuery } from '@hooks/index';
import { TABLET_BREAKPOINT } from '@utils/const';

import BACKGROUND_IMG from './assets/background.png';

import s from './FeedbackModal.module.scss';

const FeedbackModal: FC<{
	onClick: () => void;
}> = ({ onClick }) => {
	const { t } = useTranslation('common');
	const isTablet = useMediaQuery(TABLET_BREAKPOINT);

	const handleModalCloseClick = () => {
		onClick();
	};

	return (
		<section onClick={handleModalCloseClick} className={s.container}>
			<article className={s.inner} onClick={(e) => e.stopPropagation()}>
				<button onClick={handleModalCloseClick} className={s.closeButton}>
					<IconCross />
				</button>
				<BlockTitle title={t('FEEDBACK.INTERESTED_IN_COOPERATION')} />
				<p className={s.desc}>
					{t('FEEDBACK.IF_YOU_HAVE_ANY_QUESTIONS_ABOUT_OUR_SERVICES')}
				</p>

				<FeedbackForm isColumnType />

				{!isTablet && (
					<Image
						className={s.background}
						src={BACKGROUND_IMG}
						alt="Background image"
					/>
				)}
			</article>
		</section>
	);
};

export default FeedbackModal;
