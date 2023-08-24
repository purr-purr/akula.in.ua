import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import LOGO_WHITE from '@public/assets/logo--white.svg';
import LOGO from '@public/assets/logo.svg';

const Logo: FC<{ type?: 'white' | 'black' }> = ({ type = 'black' }) => {
	return (
		<Link href="/">
			<Image
				src={type === 'white' ? LOGO_WHITE : LOGO}
				alt="Logo"
				width={184}
				height={59}
			/>
		</Link>
	);
};

export default Logo;
