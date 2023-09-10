import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

import Button from '@modules/common/components/Button';
import SelectChangeLanguage from '@modules/common/components/SwitchLanguage';
import FeedbackModal from '@modules/feedback/components/FeedbackModal';
import IconMap from '@modules/icons/components/IconMap';
import IconPhone from '@modules/icons/components/IconPhone';

import { useMediaQuery } from '@hooks/index';
import {
	CATALOG_NAME,
	MOBILE_BREAKPOINT,
	TABLET_BREAKPOINT,
} from '@utils/const';
import { COMPANY_INFO } from '@utils/data';

import s from './NavigationContacts.module.scss';

const NavigationContacts = () => {
	const { t } = useTranslation('common');
	const isTablet = useMediaQuery(TABLET_BREAKPOINT);

	const [isFeedbackModal, setIsFeedbackModal] = useState(false);

	return (
		<article className={s.container}>
			<Link className={s.icon} href={`tel:${COMPANY_INFO.MAIN_CONTACT_NUMBER}`}>
				<IconPhone />
			</Link>

			{!isTablet && (
				<Link className={s.icon} href={`${COMPANY_INFO.ADDRESS_MAP}`}>
					<IconMap />
				</Link>
			)}

			<SelectChangeLanguage />

			{!isTablet && (
				<Button
					type="link"
					linkPath={`/${CATALOG_NAME}`}
					color="transparent"
					text={t('FIND_REAL_ESTATE')}
				/>
			)}

			<Button
				onClick={() => setIsFeedbackModal(true)}
				text={t('LEAVE_A_REQUEST')}
			/>

			{isFeedbackModal && (
				<FeedbackModal onClick={() => setIsFeedbackModal(false)} />
			)}
		</article>
	);
};

export default NavigationContacts;
