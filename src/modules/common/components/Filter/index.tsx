import { FC, useContext, useState } from 'react';
import cn from 'classnames';

import { CatalogContext } from '@modules/layout/context/CatalogContext';

import s from './Filter.module.scss';

const Filter: FC = () => {
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

	const handleFormSubmit = () => {};

	return (
		<article className={s.container}>
			<div className={s.navigation}>
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
					<label key={item.category}>
						<select>
							{item.list.map((item) => (
								<option key={item}>{item}</option>
							))}
						</select>
					</label>
				))}
				<button type="submit">Search</button>
				<div onClick={() => handleTestMode(!isTestMode)}>test</div>
			</form>
		</article>
	);
};

export default Filter;
