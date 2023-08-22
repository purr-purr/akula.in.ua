import { FC } from 'react';

import s from './BlockTitle.module.scss';

const BlockTitle: FC<{
	title: string;
}> = ({ title }) => {
	return <h2 className={s.container}>{title}</h2>;
};

export default BlockTitle;
