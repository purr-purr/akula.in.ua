import Logo from '@modules/common/components/Logo';
import SelectChangeLanguage from '@modules/common/components/SwitchLanguage';
import Nav from '@modules/nav/components/Nav';
import NavButton from '@modules/nav/components/NavBurgerButton';
import NavContacts from '@modules/nav/components/NavContacts';
import cn from 'classnames';

import { useMediaQuery } from '@modules/common/hooks';

import { MOBILE_BREAKPOINT } from '@utils/const';

import s from './Header.module.scss';

const Header = () => {
	const isMobile = useMediaQuery(MOBILE_BREAKPOINT);

	return (
		<header className={s.container}>
			<div className={cn('layout-container', s.inner)}>
				<Logo />
				<Nav />
				<NavContacts />
				<SelectChangeLanguage />
				{isMobile && <NavButton />}
			</div>
		</header>
	);
};

export default Header;
