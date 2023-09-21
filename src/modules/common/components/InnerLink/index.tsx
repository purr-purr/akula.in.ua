import { FC } from 'react';
import Link from 'next/link';
import cn from 'classnames';

import IconArrowUp from '@icons/components/IconArrowUp';

import s from './InnerLink.module.scss';

const InnerLink: FC<{
	text: string;
	linkPath?: string;
	onClick?: () => void;
	type?: 'button' | 'link';
	className?: string;
	isReverseType?: boolean;
}> = ({
	text,
	type = 'button',
	linkPath = '/',
	onClick,
	className,
	isReverseType = false,
}) => {
	const classNameList = cn(s.container, className, isReverseType && s.reverse);

	return type === 'link' ? (
		<Link className={classNameList} href={linkPath} onClick={onClick}>
			{text}
			<IconArrowUp />
		</Link>
	) : (
		<button className={classNameList} onClick={onClick}>
			{text}
			<IconArrowUp />
		</button>
	);
};

export default InnerLink;
