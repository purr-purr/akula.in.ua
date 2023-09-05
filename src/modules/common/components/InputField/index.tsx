import { FC } from 'react';
import cn from 'classnames';

import type { ReactNode } from 'react';

import s from './InputField.module.scss';

const InputField: FC<{
	label: string;
	color?: 'light' | 'dark';
	children: ReactNode;
}> = ({ label, children, color = 'light' }) => {
	return (
		<label className={cn(s.container, s[color])}>
			<span className={s.label}>{label}</span>
			{children}
		</label>
	);
};

export default InputField;
