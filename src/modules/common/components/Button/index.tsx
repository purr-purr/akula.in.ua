import { FC } from 'react';
import Link from 'next/link';
import cn from 'classnames';

import s from './Button.module.scss';

const Button: FC<{
	text: string;
	linkPath?: string;
	onClick?: () => void;
	type?: 'button' | 'link';
	color?: 'primary' | 'transparent';
	isDisabled?: boolean;
}> = ({
	text,
	type = 'button',
	linkPath = '/',
	onClick,
	color = 'primary',
	isDisabled = false,
}) => {
	const classNameList = cn(s.container, s[color]);

	return type === 'link' ? (
		<Link className={classNameList} href={linkPath} onClick={onClick}>
			{text}
		</Link>
	) : (
		<button disabled={isDisabled} className={classNameList} onClick={onClick}>
			{text}
		</button>
	);
};

export default Button;
