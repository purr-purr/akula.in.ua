import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import cn from 'classnames';

import Logo from '@modules/common/components/Logo';
import IconEmail from '@modules/icons/components/IconEmail';
import IconFacebook from '@modules/icons/components/IconFacebook';
import IconInstagram from '@modules/icons/components/IconInstagram';
import IconMap from '@modules/icons/components/IconMap';
import IconPhone from '@modules/icons/components/IconPhone';
import IconTelegram from '@modules/icons/components/IconTelegram';
import IconTiktok from '@modules/icons/components/IconTiktok';
import IconViber from '@modules/icons/components/IconViber';

import { COMPANY_INFO } from '@utils/data';

import s from './Footer.module.scss';

interface ISocials {
	link: string;
	icon: JSX.Element;
}

interface IContacts extends ISocials {
	title: string;
}

const Footer = () => {
	const { t } = useTranslation('common');
	const currentYear = new Date().getFullYear();

	const CONTACTS: IContacts[] = [
		{
			title: COMPANY_INFO.ADDRESS,
			link: COMPANY_INFO.ADDRESS_MAP,
			icon: <IconMap color="#fff" />,
		},
		{
			title: COMPANY_INFO.MAIN_CONTACT_NUMBER,
			link: COMPANY_INFO.MAIN_CONTACT_NUMBER,
			icon: <IconPhone color="#fff" />,
		},
		{ title: COMPANY_INFO.EMAIL, link: COMPANY_INFO.EMAIL, icon: <IconEmail /> },
		{
			title: COMPANY_INFO.SECOND_CONTACT_NUMBER,
			link: COMPANY_INFO.SECOND_CONTACT_NUMBER,
			icon: <IconPhone color="#fff" />,
		},
	];

	const SOCIALS: ISocials[] = [
		{ icon: <IconInstagram />, link: COMPANY_INFO.INSTAGRAM },
		{ icon: <IconFacebook />, link: COMPANY_INFO.FACEBOOK },
		{ icon: <IconTiktok />, link: COMPANY_INFO.TIKTOK },
		{ icon: <IconViber />, link: COMPANY_INFO.VIBER },
		{ icon: <IconTelegram />, link: COMPANY_INFO.TELEGRAM },
	];

	return (
		<footer className={cn('layout-container', s.container)}>
			<article className={s.inner}>
				<Logo type="white" />
				<div className={s.socials}>
					<p>{t('WE_ARE_ON_SOCIAL_NETWORKS')}</p>
					<ul className={s[`socials-list`]}>
						{SOCIALS.map((item, i) => (
							<li key={item.link + i} className={s[`socials-item`]}>
								<Link href={item.link}>{item.icon}</Link>
							</li>
						))}
					</ul>
				</div>
				<ul className={s.contacts}>
					{CONTACTS.map((item) => (
						<li key={item.link}>
							<Link href={item.link}>
								{item.icon}
								{item.title}
							</Link>
						</li>
					))}
				</ul>
			</article>
			<p className={s.rights}>
				{t('ALL_RIGHTS_RESERVED')}/{currentYear}
			</p>
		</footer>
	);
};

export default Footer;
