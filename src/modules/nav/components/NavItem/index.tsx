import {FC, useContext} from 'react';
import Link from 'next/link';

import {HeaderContext} from '@modules/layout/context/HeaderContext';

interface INavPageItemProps {
	title: string;
	path: string;
}

const NavItem: FC<INavPageItemProps> = ({title, path}) => {
	const {handleMobileNavMode} = useContext(HeaderContext);

	return (
		<Link onClick={() => handleMobileNavMode(false)} href={path}>
			{title}
		</Link>
	);
};

export default NavItem;
