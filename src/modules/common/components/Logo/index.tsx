import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { useMediaQuery } from '@hooks/index';
import { LAPTOP_BREAKPOINT, TABLET_BREAKPOINT } from '@utils/const';

import LOGO_WHITE from '@public/assets/logo--white.svg';
import LOGO from '@public/assets/logo.png';

const Logo: FC<{ type?: 'white' | 'black' }> = ({ type = 'black' }) => {
	const isTablet = useMediaQuery(TABLET_BREAKPOINT);
	const isLaptop = useMediaQuery(LAPTOP_BREAKPOINT);

	const width = isTablet ? 105 : isLaptop ? 130 : 184;
	const height = isTablet ? 34 : isLaptop ? 42 : 59;

	return (
		<Link href="/">
			<Image
				src={type === 'white' ? LOGO_WHITE : LOGO}
				alt="Logo"
				width={width}
				height={height}
			/>
		</Link>
	);
};

export default Logo;
