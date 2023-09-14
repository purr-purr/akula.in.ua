import cn from 'classnames';

import Logo from '@modules/common/components/Logo';
import Navigation from '@modules/navigation/components/Navigation';

import s from './Header.module.scss';

const Header = () => {
	return (
		<header className={cn('layout-container', s.container)}>
			<Logo />
			<Navigation />
		</header>
	);
};

export default Header;
