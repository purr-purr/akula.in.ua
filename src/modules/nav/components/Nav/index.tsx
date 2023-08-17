import { useContext, useEffect } from 'react';
import cn from 'classnames';

import { useMediaQuery } from '@modules/common/hooks';
import { HeaderContext } from '@modules/layout/context/HeaderContext';
import NavItem from '@modules/nav/components/NavItem';

import { MOBILE_BREAKPOINT } from '@utils/const';
import { NAVIGATION } from '@utils/data';

import type { INavigation } from '@utils/data';

import s from './Nav.module.scss';

const Nav = () => {
	const isMobile = useMediaQuery(MOBILE_BREAKPOINT);
	const { isMobileNavMode, handleMobileNavMode } = useContext(HeaderContext);

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
		<nav className={cn(s.container, isMobileNavMode && s.active)}>
			{NAVIGATION.map((item: INavigation) => (
				<NavItem key={item.path} title={item.title} path={item.path} />
			))}
		</nav>
	);
};

export default Nav;
