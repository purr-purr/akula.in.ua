import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import CatalogPageMap from '@modules/pages/catalogPage/components/CatalogPageMap';
import CatalogPageNotice from '@modules/pages/catalogPage/components/CatalogPageNotice';
import CatalogPageTable from '@modules/pages/catalogPage/components/CatalogPageTable';

import type { ICatalogTable } from '@t-types/data';

import s from './CatalogPageInformation.module.scss';

const CatalogPageInformation: FC<{
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
	const { t } = useTranslation('catalog');

	return (
		<>
			<article className={cn(s.frame, s.info)}>
				<div className={s.infoHeading}>
					<h4 className={s.title}>{t('INFORMATION')}</h4>
					<p>
						{t('OBJECT_ID')} <span className={s.id}>{id}</span>
					</p>
				</div>

				<CatalogPageTable
					price={price}
					contractType={contractType}
					realEstateType={realEstateType}
					tableInfo={tableInfo}
				/>

				<CatalogPageNotice type="short" />
			</article>

			{description && (
				<article className={cn(s.frame, s.description)}>
					<h4 className={s.title}>{t('DESCRIPTION')}</h4>
					<hr className={s.line} />
					<p
						dangerouslySetInnerHTML={{
							__html: description,
						}}
					/>
				</article>
			)}

			<article className={cn(s.frame, s.address)}>
				<h4 className={s.title}>{t('ADDRESS')}</h4>
				<hr className={s.line} />
				{address && <p>{address}</p>}
				{station && <p>{station}</p>}
				<CatalogPageMap fullAddress={originalAddress} />
			</article>

			<CatalogPageNotice />
		</>
	);
};

export default CatalogPageInformation;
