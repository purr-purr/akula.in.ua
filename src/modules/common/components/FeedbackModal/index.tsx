import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

import BlockTitle from '@modules/common/components/BlockTitle';
import FeedbackForm from '@modules/common/components/FeedbackForm';
import IconCross from '@modules/icons/components/IconCross';

import BACKGROUND_IMG from '../../assets/FeedbackModal/background.png';
import s from './FeedbackModal.module.scss';

const FeedbackModal: FC<{
	onClick: () => void;
}> = ({ onClick }) => {
	const { t } = useTranslation('common');
	const handleModalClick = () => {
		onClick();
	};

	return (
		<section onClick={handleModalClick} className={s.container}>
			<article className={s.inner} onClick={(e) => e.stopPropagation()}>
				<button onClick={handleModalClick} className={s[`close-button`]}>
					<IconCross />
				</button>
				<BlockTitle title={t('FEEDBACK.INTERESTED_IN_COOPERATION')} />
				<p className={s.desc}>
					{t('FEEDBACK.IF_YOU_HAVE_ANY_QUESTIONS_ABOUT_OUR_SERVICES')}
				</p>

				<FeedbackForm isColumnType />

				<Image className={s.background} src={BACKGROUND_IMG} alt={''} />
			</article>
		</section>
	);
};

export default FeedbackModal;
