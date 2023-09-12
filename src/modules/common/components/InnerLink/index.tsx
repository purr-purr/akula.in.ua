import { FC } from 'react';
import Link from 'next/link';
import cn from 'classnames';

import IconArrowUp from '@modules/icons/components/IconArrowUp';

import s from './InnerLink.module.scss';

const InnerLink: FC<{
	text: string;
	linkPath?: string;
	onClick?: () => void;
	type?: 'button' | 'link';
	className?: string;
}> = ({ text, type = 'button', linkPath = '/', onClick, className }) => {
	const classNameList = cn(s.container, className);

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
