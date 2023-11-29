import {FC} from 'react';
import {useTranslation} from 'react-i18next';

import {useCurrencyFetching} from '@hooks/index';
import {formatCatalogTranslation} from '@utils/formatters';

import type {ICatalogTable} from '@t-types/data';

import {
	formatTableAfterPrefix,
	formatTableFullPrice,
	formatToPrefixOnly,
} from '../../utils/formatters';
import s from './CatalogPageTable.module.scss';

const CatalogPageTable: FC<{
	tableInfo: ICatalogTable;
	contractType: string;
	realEstateType: string;
	price: string;
}> = ({tableInfo, realEstateType, contractType, price}) => {
	const {i18n, t: tCommon} = useTranslation('common');
	const {t: tCatalog} = useTranslation('catalog');
	const {currencyRate} = useCurrencyFetching();

	tableInfo.totalCost = price;
	const table = Object.entries(tableInfo)
		.map(
			([key, value]) =>
				value && {
					key: key,
					value: value,
				},
		)
		.filter(Boolean);

	const itemContractType = tCommon(formatCatalogTranslation(contractType));
	const itemRealEstateType = tCommon(formatCatalogTranslation(realEstateType));

	return (
		<table className={s.container}>
			<tbody>
			<tr>
				<td>{tCatalog('TYPE_OF_AGREEMENT' as string)}</td>
				<td>{itemContractType}</td>
			</tr>

			<tr>
				<td>{tCommon('TYPE_OF_REAL_ESTATE.TYPE_OF_REAL_ESTATE')}</td>
				<td>{itemRealEstateType}</td>
			</tr>

			{table.map((item) => {
				if (item) {
					const isCanBeAnyAmount =
						(item.key === 'offices' ||
							item.key === 'kitchen' ||
							item.key === 'bathrooms') &&
						item.value === 'any';

					const isLandPlot = item.key === 'landPlot';
					const itemKey = item.key.toUpperCase();
					const itemValue = item.value.toString();

					const formatAfterPrefix = formatTableAfterPrefix(
						contractType,
						i18n.language,
						itemKey,
					);

					const isValueWithPrefix = [
						'RENT1M2',
						'OPERATIONAL1M2',
						'TOTALCOST',
					].includes(itemKey);

					return (
						<tr key={item.key}>
							<td>{tCatalog(`TABLE.${itemKey}`)}</td>
							<td>
								{isValueWithPrefix
									? formatTableFullPrice(i18n.language, itemValue, currencyRate)
									: isCanBeAnyAmount
										? tCommon('ANY_AMOUNT')
										: isLandPlot
											? formatToPrefixOnly(i18n.language, itemValue)
											: itemValue}{' '}
								<span
									dangerouslySetInnerHTML={{
										__html: formatAfterPrefix,
									}}
								/>
							</td>
						</tr>
					);
				}
			})}
			</tbody>
		</table>
	);
};

export default CatalogPageTable;
