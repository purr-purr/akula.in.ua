import { useContext } from 'react';

import AppContext from '@modules/layout/context';
import NavItem from '@modules/nav/components/NavItem';
import cn from 'classnames';

import { NAVIGATION } from '@utils/data';

import s from './Nav.module.scss';

const Nav = () => {
	const { isMobileNavMode } = useContext(AppContext);

	return (
		<nav className={cn(s.container, isMobileNavMode && s.active)}>
			{NAVIGATION.map((item) => (
				<NavItem key={item.path} title={item.title} path={item.path} />
			))}
		</nav>
	);
};

export default Nav;
