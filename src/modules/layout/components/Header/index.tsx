import { useContext } from 'react';
import { HeaderContext } from '@context/HeaderContext';
import cn from 'classnames';

import Logo from '@modules/common/components/Logo';
import Navigation from '@modules/navigation/components/Navigation';

import s from './Header.module.scss';

const Header = () => {
	const { isMobileNavMode } = useContext(HeaderContext);
	return (
		<header
			className={cn('layout-container', s.container, isMobileNavMode && s.active)}
		>
			<Logo />
			<Navigation />
		</header>
	);
};

export default Header;
