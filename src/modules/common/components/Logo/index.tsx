import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { useMediaQuery } from '@hooks/index';
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from '@utils/const';

import LOGO_WHITE from '@public/assets/logo--white.svg';
import LOGO from '@public/assets/logo.svg';

const Logo: FC<{ type?: 'white' | 'black' }> = ({ type = 'black' }) => {
	const isMobile = useMediaQuery(MOBILE_BREAKPOINT);
	const isTablet = useMediaQuery(TABLET_BREAKPOINT);

	const width = isMobile ? 105 : isTablet ? 130 : 184;
	const height = isMobile ? 34 : isTablet ? 42 : 59;

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
