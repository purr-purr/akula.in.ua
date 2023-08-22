import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import BlockTitle from '@modules/common/components/BlockTitle';
import FeedbackForm from '@modules/common/components/FeedbackForm';

import s from './Feedback.module.scss';

const Feedback: FC<{ messageText?: string }> = ({ messageText }) => {
	const { t } = useTranslation('common');

	const infoTypeInterestedInCooperation = {
		title: t('FEEDBACK.INTERESTED_IN_COOPERATION'),
		desc: t('FEEDBACK.INTERESTED_IN_COOPERATION_DESC'),
	};

	return (
		<section className={cn(s.container, 'nude-bg')}>
			<BlockTitle title={infoTypeInterestedInCooperation.title} />
			<p>{infoTypeInterestedInCooperation.desc}</p>
			<FeedbackForm messageText={messageText} />
		</section>
	);
};

export default Feedback;
