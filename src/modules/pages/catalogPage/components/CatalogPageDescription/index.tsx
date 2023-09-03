import { FC } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import cn from 'classnames';

import CatalogPageMap from '@modules/pages/catalogPage/components/CatalogPageMap';
import CatalogPageTable from '@modules/pages/catalogPage/components/CatalogPageTable';

import { CURRENCY } from '@utils/data';

import type { ICatalogTable } from '@modules/common/types';

import s from './CatalogPageDescription.module.scss';

const CatalogPageDescription: FC<{
	description: string;
	id: number;
	tableInfo: ICatalogTable;
	address: string;
	originalAddress: string;
	station: string;
	contractType: string;
	realEstateType: string;
	price: string;
}> = ({
	description,
	tableInfo,
	id,
	address,
	originalAddress,
	station,
	realEstateType,
	contractType,
	price,
}) => {
	const { t: tCatalog } = useTranslation('catalog');

	return (
		<>
			<article className={cn(s.frame, s.info)}>
				<div className={s[`info-heading`]}>
					<h4 className={s.title}>{tCatalog('INFORMATION')}</h4>
					<p>
						{tCatalog('OBJECT_ID')} <span className={s.id}>{id}</span>
					</p>
				</div>

				<CatalogPageTable
					price={price}
					contractType={contractType}
					realEstateType={realEstateType}
					tableInfo={tableInfo}
				/>

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
				{address && <p>{address}</p>}
				{station && <p>{station}</p>}
				<CatalogPageMap fullAddress={originalAddress} />
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
