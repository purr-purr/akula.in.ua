import { FC } from 'react';

import s from './Button.module.scss';

const Button: FC<{
	text: string;
}> = ({ text }) => {
	return <button className={s.container}>{text}</button>;
};

export default Button;
