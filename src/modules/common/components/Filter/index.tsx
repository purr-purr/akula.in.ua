import { FC, useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import Button from '@modules/common/components/Button';
import Dropdown from '@modules/common/components/Dropdown';
import InputField from '@modules/common/components/InputField';
import { CatalogContext } from '@modules/layout/context/CatalogContext';

import { useDataFetching } from '@hooks/index';
import { initialFilters } from '@utils/filters';
import {
	formatCatalogTranslation,
	formatCityTranslation,
} from '@utils/formatters';

import type { ICatalogData } from '@global-types/index';
import type { IFilters } from '@utils/filters';
import type { FormEvent } from 'react';

import s from './Filter.module.scss';

const Filter: FC<{
	side?: 'left' | 'center';
}> = ({ side = 'left' }) => {
	const { t } = useTranslation('common');
	const [activeTabIndex, setActiveTabIndex] = useState(0);
	const [currentFilters, setCurrentFilters] = useState<IFilters>(initialFilters);
	const { filters, handleFilters } = useContext(CatalogContext);
	const { data } = useDataFetching();
	const tabs = [t('OBJECT_INFO.SELLING'), t('OBJECT_INFO.RENT')];

	const parseUniqueFilterItem = (
		data: ICatalogData[],
		key: keyof ICatalogData,
	) => {
		return Array.from(
			new Set(
				data
					.filter((item: ICatalogData) => item.visibility)
					.map((item) => item[key]),
			),
		).map((item) => {
			return {
				value: item,
				title: t(
					key === 'city'
						? formatCityTranslation(item.toString())
						: formatCatalogTranslation(item.toString()),
				),
			};
		});
	};

	const filterList = (data: ICatalogData[]) => ({
		city: parseUniqueFilterItem(data, 'city'),
		propertyType: parseUniqueFilterItem(data, 'property_type'),
		realEstateType: parseUniqueFilterItem(data, 'real_estate_type'),
	});

	const filterListOptions = filterList(data);
	const createUIFilterItem = (
		category: string,
		label: keyof typeof filterListOptions,
	) => ({
		category: category,
		label: label,
		list: [{ value: 'All', title: t('ALL') }, ...filterListOptions[label]],
	});

	const UI_FILTERS_LIST = [
		createUIFilterItem(t('PROPERTY_TYPE'), 'propertyType'),
		createUIFilterItem(
			t('TYPE_OF_REAL_ESTATE.TYPE_OF_REAL_ESTATE'),
			'realEstateType',
		),
		createUIFilterItem(t('CITY'), 'city'),
	];

	const handleOnChangeFilters = (initial: string, label: string) => {
		const currentObject: IFilters = { ...currentFilters };
		currentObject[label as keyof IFilters] = initial;
		setCurrentFilters(currentObject);
	};

	const handleFormSubmit = (event: FormEvent) => {
		event.preventDefault();
	};

	const handleApplyFilters = () => {
		handleFilters(currentFilters);
	};

	useEffect(() => {
		console.log(filters);
	}, [filters]);

	return (
		<section className={cn(s.container, side && s[side])}>
			<div className={cn(s.tabs, side && s[side])}>
				{tabs.map((tab, index) => (
					<button
						key={index}
						onClick={() => setActiveTabIndex(index)}
						className={cn(s.tab, index === activeTabIndex && s.active)}
					>
						{tab}
					</button>
				))}
			</div>
			<form className={s.form} onSubmit={handleFormSubmit}>
				{UI_FILTERS_LIST.map((item) => (
					<InputField key={item.category} label={item.category}>
						<Dropdown
							label={item.label}
							handleOnChange={handleOnChangeFilters}
							options={item.list}
						/>
					</InputField>
				))}
				<Button onClick={handleApplyFilters} text={t('FIND_REAL_ESTATE')} />
			</form>
		</section>
	);
};

export default Filter;
