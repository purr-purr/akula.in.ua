import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import cn from 'classnames';

import Logo from '@modules/common/components/Logo';
import IconEmail from '@icons/components/IconEmail';
import IconFacebook from '@icons/components/IconFacebook';
import IconInstagram from '@icons/components/IconInstagram';
import IconMap from '@icons/components/IconMap';
import IconPhone from '@icons/components/IconPhone';
import IconTelegram from '@icons/components/IconTelegram';
import IconTiktok from '@icons/components/IconTiktok';
import IconViber from '@icons/components/IconViber';
import IconWhatsapp from '@icons/components/IconWhatsapp';

import { useMediaQuery } from '@hooks/index';
import { AUTHOR_INFO, MOBILE_BREAKPOINT } from '@utils/const';
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
	const isMobile = useMediaQuery(MOBILE_BREAKPOINT);

	const CONTACTS: IContacts[] = [
		{
			title: t('MAIN_OFFICE_ADDRESS'),
			link: COMPANY_INFO.ADDRESS_MAP,
			icon: <IconMap color="#fff" />,
		},
		{
			title: COMPANY_INFO.MAIN_CONTACT_NUMBER,
			link: `tel:${COMPANY_INFO.MAIN_CONTACT_NUMBER}`,
			icon: <IconPhone color="#fff" />,
		},
		{
			title: COMPANY_INFO.EMAIL,
			link: `mailto:${COMPANY_INFO.EMAIL}`,
			icon: <IconEmail />,
		},
		// TODO Temporarily unused Phone number
		// {
		// 	title: COMPANY_INFO.SECOND_CONTACT_NUMBER,
		// 	link: `tel:${COMPANY_INFO.SECOND_CONTACT_NUMBER}`,
		// 	icon: <IconPhone color="#fff" />,
		// },
	];

	const SOCIALS: ISocials[] = [
		{ icon: <IconInstagram />, link: COMPANY_INFO.INSTAGRAM },
		{ icon: <IconFacebook />, link: COMPANY_INFO.FACEBOOK },
		{ icon: <IconTiktok />, link: COMPANY_INFO.TIKTOK },
		{ icon: <IconViber />, link: COMPANY_INFO.VIBER },
		{ icon: <IconTelegram />, link: COMPANY_INFO.TELEGRAM },
		{ icon: <IconWhatsapp />, link: COMPANY_INFO.WHATSAPP },
	];

	return (
		<footer className={cn('layout-container', s.container)}>
			<article className={s.inner}>
				<Logo type="white" />
				<div className={s.socials}>
					<p>{t('WE_ARE_ON_SOCIAL_NETWORKS')}</p>
					<ul className={s.socialsList}>
						{SOCIALS.map((item, i) => (
							<li key={item.link + i} className={s.socialsItem}>
								<a href={item.link} target="_blank" rel="noreferrer">
									{item.icon}
								</a>
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
				<span>
					{t('SITE_DEVELOPMENT')}{' '}
					<a
						className="link"
						target="_blank"
						rel="noreferrer"
						href={`https://${AUTHOR_INFO.SIGNATURE}`}
					>
						{AUTHOR_INFO.SIGNATURE}
					</a>{' '}
				</span>
				{!isMobile && ` • `}
				{t('ALL_RIGHTS_RESERVED')}/{currentYear}
			</p>
		</footer>
	);
};

export default Footer;
