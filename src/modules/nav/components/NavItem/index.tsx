import { FC, useContext } from 'react';
import Link from 'next/link';

import AppContext from '@modules/layout/context';

interface INavPageItemProps {
	title: string;
	path: string;
}

const NavItem: FC<INavPageItemProps> = ({ title, path }) => {
	const { handleMobileNavMode } = useContext(AppContext);

	return (
		<Link onClick={() => handleMobileNavMode(false)} href={path}>
			{title}
		</Link>
	);
};

export default NavItem;
