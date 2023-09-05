import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { useMediaQuery } from '@hooks/index';

import Button from '@modules/common/components/Button';
import FeedbackModal from '@modules/common/components/FeedbackModal';
import SelectChangeLanguage from '@modules/common/components/SwitchLanguage';
import IconMap from '@modules/icons/components/IconMap';
import IconPhone from '@modules/icons/components/IconPhone';

import { APP, MOBILE_BREAKPOINT } from '@utils/const';
import { COMPANY_INFO } from '@utils/data';

import s from './NavContacts.module.scss';

const NavContacts = () => {
	const { t } = useTranslation('common');
	const isMobile = useMediaQuery(MOBILE_BREAKPOINT);
	const [isFeedbackModal, setIsFeedbackModal] = useState(false);

	return (
		<article className={s.container}>
			<Link className={s.icon} href={`tel:${COMPANY_INFO.MAIN_CONTACT_NUMBER}`}>
				<IconPhone />
			</Link>

			{!isMobile && (
				<Link className={s.icon} href={`${COMPANY_INFO.ADDRESS_MAP}`}>
					<IconMap />
				</Link>
			)}

			<SelectChangeLanguage />

			{!isMobile && (
				<Button
					type="link"
					linkPath={`/${APP.CATALOG_NAME}`}
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

export default NavContacts;
