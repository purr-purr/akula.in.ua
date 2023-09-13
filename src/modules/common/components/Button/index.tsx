import { FC, ReactNode } from 'react';
import Link from 'next/link';
import cn from 'classnames';

import s from './Button.module.scss';

const Button: FC<{
	text: string;
	linkPath?: string;
	onClick?: () => void;
	type?: 'button' | 'link';
	color?: 'primary' | 'transparent';
	children?: ReactNode;
	className?: string;
}> = ({
	text,
	type = 'button',
	linkPath = '/',
	onClick,
	color = 'primary',
	children,
	className,
}) => {
	const classNameList = cn(
		s.container,
		s[color],
		children && s.verticalAlign,
		className,
	);

	return type === 'link' ? (
		<Link className={classNameList} href={linkPath} onClick={onClick}>
			{children}
			{text}
		</Link>
	) : (
		<button className={classNameList} onClick={onClick}>
			{children}
			{text}
		</button>
	);
};

export default Button;
