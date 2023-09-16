import { FC, useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import { CatalogContext } from '@context/CatalogContext';
import cn from 'classnames';

import Button from '@modules/common/components/Button';
import Dropdown from '@modules/common/components/Dropdown';
import InputField from '@modules/common/components/InputField';

import { useDataFetching } from '@hooks/index';
import { CATALOG_NAME } from '@utils/const';
import { initialFilters } from '@utils/filters';
import {
	formatCatalogTranslation,
	formatCityTranslation,
} from '@utils/formatters';

import type { DropdownOptions } from '@modules/common/types/dropdown';
import type { ICatalogData } from '@t-types/data';
import type { IFilters } from '@t-types/filters';
import type { FormEvent } from 'react';

import s from './Filter.module.scss';

const Filter: FC<{
	side?: 'left' | 'center';
}> = ({ side = 'left' }) => {
	const { t } = useTranslation('common');
	const [activeTabIndex, setActiveTabIndex] = useState<string>(
		initialFilters.contractType,
	);
	const [currentFilters, setCurrentFilters] = useState<IFilters>(initialFilters);
	const { filters, handleFilters } = useContext(CatalogContext);
	const { data } = useDataFetching();
	const router = useRouter();

	const tabs = [t('OBJECT_INFO.RENT'), t('OBJECT_INFO.SELLING')];

	const parseUniqueFilterItem = (
		data: ICatalogData[],
		key: keyof ICatalogData,
	) => {
		return Array.from(new Set(data.map((item: ICatalogData) => item[key]))).map(
			(item) => {
				return {
					value: item.toString(),
					title: t(
						key === 'city'
							? formatCityTranslation(item.toString())
							: formatCatalogTranslation(item.toString()),
					),
				};
			},
		);
	};

	const filterList = (data: ICatalogData[]) => ({
		city: parseUniqueFilterItem(data, 'city'),
		propertyType: parseUniqueFilterItem(data, 'propertyType'),
		realEstateType: parseUniqueFilterItem(data, 'realEstateType'),
	});

	const filterListOptions = filterList(data);
	const createUIFilterItem = (
		category: string,
		label: keyof typeof filterListOptions,
	) => ({
		category: t(category),
		label: label,
		list: [{ value: 'All', title: t('ALL') }, ...filterListOptions[label]],
	});

	const UI_FILTERS_LIST = [
		createUIFilterItem('PROPERTY_TYPE', 'propertyType'),
		createUIFilterItem(
			'TYPE_OF_REAL_ESTATE.TYPE_OF_REAL_ESTATE',
			'realEstateType',
		),
		createUIFilterItem('CITY', 'city'),
	];

	const handleOnChangeFilters = (item: DropdownOptions, label: string) => {
		const currentObject: IFilters = { ...currentFilters };
		currentObject[label as keyof IFilters] = item.value;
		setCurrentFilters(currentObject);
	};

	const handleFormSubmit = (event: FormEvent) => {
		event.preventDefault();
	};

	const handleApplyFilters = () => {
		handleFilters(currentFilters);

		const catalogPath = `/${CATALOG_NAME}`;
		if (router.asPath !== catalogPath) {
			router.push(catalogPath).then();
		}
	};

	useEffect(() => {
		setCurrentFilters(filters);
		setActiveTabIndex(filters.contractType);
	}, [filters]);

	const getCurrentTabName = (index: number) => {
		return index === 0 ? 'Оренда' : 'Продаж';
	};

	const handleTabButtonClick = (index: number) => {
		const currentTab = getCurrentTabName(index);
		setActiveTabIndex(currentTab);
		handleFilters({
			...filters,
			contractType: currentTab,
		});
	};

	const translateInputValue = (label: string) => {
		const labelKey = label as keyof IFilters;
		if (currentFilters[labelKey] === 'All') {
			return 'ALL';
		}
		if (labelKey === 'city') {
			return formatCityTranslation(currentFilters[labelKey]);
		}
		return formatCatalogTranslation(currentFilters[labelKey]);
	};

	return (
		<section className={cn(s.container, side && s[side])}>
			<div className={cn(s.tabs, side && s[side])}>
				{tabs.map((tab, index) => (
					<button
						key={index}
						onClick={() => handleTabButtonClick(index)}
						className={cn(
							s.tab,
							getCurrentTabName(index) === activeTabIndex && s.active,
						)}
					>
						{tab}
					</button>
				))}
			</div>
			<form className={s.form} onSubmit={handleFormSubmit}>
				{UI_FILTERS_LIST.map((item) => (
					<InputField
						className={s.inputField}
						key={item.category}
						label={item.category}
					>
						<Dropdown
							currentOption={{
								value: currentFilters[item.label],
								title: t(translateInputValue(item.label)),
							}}
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
