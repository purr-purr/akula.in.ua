import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import LOGO from '@public/assets/logo.png';

const Logo: FC = () => {
	return (
		<Link href="/">
			<Image src={LOGO} alt="Logo" width={53} height={53} />
		</Link>
	);
};

export default Logo;
