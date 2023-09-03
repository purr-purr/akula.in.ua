import { useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import cn from 'classnames';

import { useMediaQuery } from '@modules/common/hooks';
import { HeaderContext } from '@modules/layout/context/HeaderContext';
import NavButton from '@modules/nav/components/NavBurgerButton';
import NavContacts from '@modules/nav/components/NavContacts';

import { MOBILE_BREAKPOINT } from '@utils/const';

import s from './Nav.module.scss';

interface INavigation {
	title: string;
	path: string;
}

const Nav = () => {
	const isMobile = useMediaQuery(MOBILE_BREAKPOINT);
	const { isMobileNavMode, handleMobileNavMode } = useContext(HeaderContext);
	const { t } = useTranslation('common');
	const { pathname } = useRouter();

	const NAVIGATION: INavigation[] = [
		{ title: 'MAIN', path: `/` },
		{ title: 'SERVICES', path: `/services` },
		{ title: 'ALL_REAL_ESTATE', path: `/catalog` },
	];

	useEffect(() => {
		const element = document.querySelector('html');
		if (!isMobile) {
			handleMobileNavMode(false);
		}
		if (element) {
			element.setAttribute(
				'style',
				`${isMobileNavMode ? `overflow:hidden;` : ``}`,
			);
		}
	}, [isMobileNavMode, isMobile]);

	return (
		<>
			<nav className={cn(s.container, isMobileNavMode && s.active)}>
				{NAVIGATION.map((item: INavigation) => (
					<Link
						key={item.path}
						className={cn(s.item, item.path === pathname && s.current)}
						onClick={() => handleMobileNavMode(false)}
						href={item.path}
					>
						{t(`NAVIGATION.${item.title}`)}
					</Link>
				))}
			</nav>

			<NavContacts />
			{isMobile && <NavButton />}
		</>
	);
};

export default Nav;
