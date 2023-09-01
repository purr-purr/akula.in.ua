import { FC } from 'react';
import cn from 'classnames';

import s from './BlockTitle.module.scss';

const BlockTitle: FC<{
	title: string;
	className?: string;
}> = ({ title, className }) => {
	return <h2 className={cn(s.container, className)}>{title}</h2>;
};

export default BlockTitle;
