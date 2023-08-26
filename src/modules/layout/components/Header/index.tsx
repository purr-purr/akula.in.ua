import cn from 'classnames';

import Logo from '@modules/common/components/Logo';
import Nav from '@modules/nav/components/Nav';

import s from './Header.module.scss';

const Header = () => {
	return (
		<header className={cn('layout-container', s.container)}>
			{/*<section className={cn('layout-container', s.inner)}>*/}
			<Logo />
			<Nav />
			{/*</section>*/}
		</header>
	);
};

export default Header;
