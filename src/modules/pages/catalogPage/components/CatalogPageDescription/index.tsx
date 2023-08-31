import { FC } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import cn from 'classnames';
import { v4 as uniqueId } from 'uuid';

import CatalogPageMap from '@modules/pages/catalogPage/components/CatalogPageMap';

import { CURRENCY } from '@utils/data';
import {
	formatCatalogTranslation,
	formatTableParameters,
} from '@utils/formatters';

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
	const { i18n, t: tCommon } = useTranslation('common');
	const { t: tCatalog } = useTranslation('catalog');
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

	const itemFullAddress = city + ' ' + address;
	const itemContractType = tCommon(formatCatalogTranslation(contractType));
	const itemRealEstateType = tCommon(formatCatalogTranslation(realEstateType));

	return (
		<>
			<article className={cn(s.frame, s.info)}>
				<div className={s[`info-heading`]}>
					<h4 className={s.title}>{tCatalog('INFORMATION')}</h4>
					<p>
						{tCatalog('OBJECT_ID')} <span className={s.id}>{id}</span>
					</p>
				</div>

				<table className={cn(s.table)}>
					<tbody>
						<tr>
							<td>{tCatalog('TYPE_OF_AGREEMENT')}</td>
							<td>{itemContractType}</td>
						</tr>

						<tr>
							<td>{tCommon('TYPE_OF_REAL_ESTATE.TYPE_OF_REAL_ESTATE')}</td>
							<td>{itemRealEstateType}</td>
						</tr>

						{table?.map((item) => (
							<tr key={uniqueId()}>
								<td>{tCatalog(`TABLE.${item?.key.toUpperCase()}`)}</td>
								<td>
									{item?.value}{' '}
									<span
										dangerouslySetInnerHTML={{
											__html: formatTableParameters(
												contractType,
												i18n.language,
												item?.key.toUpperCase(),
											),
										}}
									/>
								</td>
							</tr>
						))}
					</tbody>
				</table>

				<p className={s.notification}>
					<span className="star">*</span> {tCatalog('ACCORDING_TO_THE_REQUIREMENTS')}
				</p>
			</article>

			{description && (
				<article className={cn(s.frame, s.description)}>
					<h4 className={s.title}>{tCatalog('DESCRIPTION')}</h4>
					<hr className={s.line} />
					<p
						dangerouslySetInnerHTML={{
							__html: description,
						}}
					/>
				</article>
			)}

			<article className={cn(s.frame, s.address)}>
				<h4 className={s.title}>{tCatalog('ADDRESS')}</h4>
				<hr className={s.line} />
				{address && <p>{itemFullAddress}</p>}
				{station && <p>{station}</p>}
				<CatalogPageMap fullAddress={itemFullAddress} />
			</article>

			<p className={s.notification}>
				<span className="star">*</span>{' '}
				<Trans
					t={tCatalog}
					i18nKey="REQUIREMENTS_OF_THE_LAW_OF_UKRAINE"
					useDangerouslySetInnerHTML
					values={{
						date: CURRENCY.DATE,
						uah: CURRENCY.UAH,
					}}
					components={{
						Link: (
							<a
								className="link"
								href="https://www.eximb.com/"
								target="_blank"
								rel="noreferrer"
							/>
						),
					}}
				/>
			</p>
		</>
	);
};

export default CatalogPageDescription;
