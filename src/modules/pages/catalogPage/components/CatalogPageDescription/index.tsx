import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import { v4 as uniqueId } from 'uuid';

import CatalogPageMap from '@modules/pages/catalogPage/components/CatalogPageMap';

import type { ICatalogTable } from '@modules/common/types';

import s from './CatalogPageDescription.module.scss';

const CatalogPageDescription: FC<{
	description: string;
	id: number;
	tableInfo: ICatalogTable | undefined;
	city: string;
	address: string;
	station: string;
	contractType: string;
	realEstateType: string;
}> = ({
	description,
	tableInfo,
	id,
	city,
	address,
	station,
	realEstateType,
	contractType,
}) => {
	const { t } = useTranslation('common');
	const table =
		tableInfo &&
		Object.entries(tableInfo)
			.map(([key, value]) => {
				if (value) {
					return {
						key: key,
						value: value,
					};
				}
			})
			.filter(Boolean);

	const fullAddress = city + ' ' + address;

	return (
		<>
			<article className={cn(s.frame, s.info)}>
				<div className={s[`info-heading`]}>
					<h4 className={s.title}>Info</h4>
					<p>
						ID Об’єкту: <span className={s.id}>{id}</span>
					</p>
				</div>

				<table className={cn(s.table)}>
					<tbody>
						<tr>
							<td>Тип угоди</td>
							<td>{contractType}</td>
						</tr>

						<tr>
							<td>{t('TYPE_OF_REAL_ESTATE.TYPE_OF_REAL_ESTATE')}</td>
							<td>{realEstateType}</td>
						</tr>

						{table?.map((item) => (
							<tr key={uniqueId()}>
								<td>{item?.key}</td>
								<td>{item?.value}</td>
							</tr>
						))}
					</tbody>
				</table>

				<p className={s[`info-notification`]}>
					<span className={s.star}>*</span> Згідно з вимогами Закону України «Про
					рекламу» ціни всіх обєктів нерухомості на сайті виводяться в гривнях.
				</p>
			</article>

			{description && (
				<article className={cn(s.frame, s.description)}>
					<h4 className={s.title}>Опис</h4>
					<hr className={s.line} />
					<p
						dangerouslySetInnerHTML={{
							__html: description,
						}}
					/>
				</article>
			)}

			<article className={cn(s.frame, s.address)}>
				<h4 className={s.title}>Address</h4>
				<hr className={s.line} />
				{address && <p>{fullAddress}</p>}
				{station && <p>{station}</p>}
				<CatalogPageMap fullAddress={fullAddress} />
			</article>
		</>
	);
};

export default CatalogPageDescription;
