import { FC, useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import Button from '@modules/layout/components/Button';
import Select from '@modules/layout/components/Select';
import { CatalogContext } from '@modules/layout/context/CatalogContext';

import type { FormEvent } from 'react';

import s from './Filter.module.scss';

const Filter: FC = () => {
	const { t } = useTranslation('common');
	const [activeTabIndex, setActiveTabIndex] = useState(0);
	const { isTestMode, handleTestMode } = useContext(CatalogContext);
	const handleTabClick = (index: number) => {
		setActiveTabIndex(index);
	};

	const tabs = ['Sales', 'Rent'];

	const MOCK_FILTERS_LIST = [
		{
			category: 'Type',
			list: ['All', 'Type1', 'Type2', 'Type3'],
		},
		{
			category: 'Looks',
			list: ['All', 'Looks1', 'Looks2', 'Looks3'],
		},
		{
			category: 'City',
			list: ['All', 'City1', 'City2', 'City3'],
		},
	];

	const handleFormSubmit = (event: FormEvent) => {
		event.preventDefault();
	};

	return (
		<article className={s.container}>
			<div className={s.tabs}>
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
					<Select key={item.category} label={item.category} options={item.list} />
				))}
				<Button text={t('find-real-estate')} />
			</form>
		</article>
	);
};

export default Filter;
