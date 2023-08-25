import { useTranslation } from 'react-i18next';
import Link from 'next/link';

import Button from '@modules/common/components/Button';
import SelectChangeLanguage from '@modules/common/components/SwitchLanguage';
import IconMap from '@modules/icons/components/IconMap';
import IconPhone from '@modules/icons/components/IconPhone';

import { APP } from '@utils/const';

import s from './NavContacts.module.scss';

const NavContacts = () => {
	const { t } = useTranslation('common');

	return (
		<article className={s.container}>
			<Link className={s.icon} href={'tel:/'}>
				<IconPhone />
			</Link>

			<Link className={s.icon} href={'/'}>
				<IconMap />
			</Link>

			<SelectChangeLanguage />

			<Button
				type="link"
				linkPath={`/${APP.CATALOG_NAME}`}
				color="transparent"
				text={t('FIND_REAL_ESTATE')}
			/>
			<Button text={t('LEAVE_A_REQUEST')} />
		</article>
	);
};

export default NavContacts;
