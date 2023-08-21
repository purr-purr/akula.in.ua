import { FC, useContext } from 'react';
import Link from 'next/link';
import cn from 'classnames';

import { HeaderContext } from '@modules/layout/context/HeaderContext';

import s from './NavItem.module.scss';

interface INavPageItemProps {
	title: string;
	path: string;
	isActive: boolean;
}

const NavItem: FC<INavPageItemProps> = ({ title, path, isActive }) => {
	const { handleMobileNavMode } = useContext(HeaderContext);

	return (
		<Link
			className={cn(s.container, isActive && s.active)}
			onClick={() => handleMobileNavMode(false)}
			href={path}
		>
			{title}
		</Link>
	);
};

export default NavItem;
