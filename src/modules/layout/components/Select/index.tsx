import { FC } from 'react';

import Dropdown from '@modules/layout/components/Dropdown';

import s from './Select.module.scss';

const Select: FC<{
	label: string;
	options: string[];
}> = ({ label, options }) => {
	return (
		<label className={s.container}>
			<span className={s.label}>{label}</span>
			<Dropdown className={s.dropdown} options={options} />
		</label>
	);
};

export default Select;
