import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import IconMap from '@icons/components/IconMap';
import IconPhone from '@icons/components/IconPhone';

import Button from '@modules/common/components/Button';
import SelectChangeLanguage from '@modules/common/components/SwitchLanguage';
import FeedbackModal from '@modules/feedback/components/FeedbackModal';

import { useMediaQuery } from '@hooks/index';
import {
	CATALOG_NAME,
	LAPTOP_BREAKPOINT,
	TABLET_BREAKPOINT,
} from '@utils/const';
import { COMPANY_INFO } from '@utils/data';

import s from './NavigationContacts.module.scss';

const NavigationContacts = () => {
	const { t } = useTranslation('common');
	const isLaptop = useMediaQuery(LAPTOP_BREAKPOINT);
	const isTablet = useMediaQuery(TABLET_BREAKPOINT);

	const [isFeedbackModal, setIsFeedbackModal] = useState(false);

	const handleLeaveRequest = () => {
		setIsFeedbackModal(true);
	};

	return (
		<article className={s.container} onClick={(e) => e.stopPropagation()}>
			<Link className={s.icon} href={`tel:${COMPANY_INFO.MAIN_CONTACT_NUMBER}`}>
				<IconPhone />
			</Link>

			{(!isLaptop || isTablet) && (
				<Link className={s.icon} href={`${COMPANY_INFO.ADDRESS_MAP}`}>
					<IconMap />
				</Link>
			)}

			<SelectChangeLanguage />

			{!isLaptop && !isTablet && (
				<Button
					className={s.actionButtons}
					type="link"
					linkPath={`/${CATALOG_NAME}`}
					color="transparent"
					text={t('FIND_REAL_ESTATE')}
				/>
			)}

			<Button
				className={s.actionButtons}
				onClick={handleLeaveRequest}
				text={t('SEND_A_REQUEST')}
			/>

			{isFeedbackModal && (
				<FeedbackModal onClick={() => setIsFeedbackModal(false)} />
			)}
		</article>
	);
};

export default NavigationContacts;
