import { FC, useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import Button from '@modules/layout/components/Button';
import Dropdown from '@modules/layout/components/Dropdown';
import Select from '@modules/layout/components/InputField';
import InputField from '@modules/layout/components/InputField';
import { CatalogContext } from '@modules/layout/context/CatalogContext';

import type { FormEvent } from 'react';

import s from './Filter.module.scss';

const Filter: FC<{
	side?: 'left' | 'center';
}> = ({ side = 'left' }) => {
	const { t } = useTranslation('common');
	const [activeTabIndex, setActiveTabIndex] = useState(0);
	const { isTestMode, handleTestMode } = useContext(CatalogContext);
	const handleTabClick = (index: number) => {
		setActiveTabIndex(index);
	};

	const tabs = [t('SELLING'), t('RENT')];

	const MOCK_FILTERS_LIST = [
		{
			category: t('PROPERTY_TYPE'),
			list: ['All', 'Type1', 'Type2', 'Type3'],
		},
		{
			category: t('TYPE_OF_REAL_ESTATE'),
			list: ['All', 'Looks1', 'Looks2', 'Looks3'],
		},
		{
			category: t('CITY'),
			list: ['All', 'City1', 'City2', 'City3'],
		},
	];

	const handleFormSubmit = (event: FormEvent) => {
		event.preventDefault();
	};

	return (
		<section className={cn(s.container, side && s[side])}>
			<div className={cn(s.tabs, side && s[side])}>
				{tabs.map((tab, index) => (
					<button
						key={index}
						onClick={() => handleTabClick(index)}
						className={cn(s.tab, index === activeTabIndex && s.active)}
					>
						{tab}
					</button>
				))}
			</div>
			<form className={s.form} onSubmit={handleFormSubmit}>
				{MOCK_FILTERS_LIST.map((item) => (
					<InputField key={item.category} label={item.category}>
						<Dropdown options={item.list} />
					</InputField>
				))}
				<Button text={t('FIND_REAL_ESTATE')} />
			</form>
		</section>
	);
};

export default Filter;
