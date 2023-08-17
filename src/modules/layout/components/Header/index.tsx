import cn from 'classnames';

import Logo from '@modules/common/components/Logo';
import { useMediaQuery } from '@modules/common/hooks';
import Nav from '@modules/nav/components/Nav';
import NavButton from '@modules/nav/components/NavBurgerButton';
import NavContacts from '@modules/nav/components/NavContacts';

import { MOBILE_BREAKPOINT } from '@utils/const';

import s from './Header.module.scss';

const Header = () => {
	const isMobile = useMediaQuery(MOBILE_BREAKPOINT);

	return (
		<header className={s.container}>
			<section className={cn('layout-container', s.inner)}>
				<Logo />
				<Nav />
				<NavContacts />
				{isMobile && <NavButton />}
			</section>
		</header>
	);
};

export default Header;
