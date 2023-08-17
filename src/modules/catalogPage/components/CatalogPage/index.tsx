import { FC, memo, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import CatalogPageAddress from '@modules/catalogPage/components/CatalogPageAddress';
import CatalogPageCarousel from '@modules/catalogPage/components/CatalogPageCarousel';
import CatalogPageCrumbs from '@modules/catalogPage/components/CatalogPageCrumbs';
import CatalogPageDescription from '@modules/catalogPage/components/CatalogPageDescription';
import CatalogPageHeader from '@modules/catalogPage/components/CatalogPageHeader';
import Feedback from '@modules/common/components/Feedback';
import Meta from '@modules/common/components/Meta';
import { useDataFetching } from '@modules/common/hooks';

import type { ICatalogData } from '@modules/common/types';

import s from './CatalogPage.module.scss';

const CatalogPage: FC = memo(() => {
	const { data, loading, initialData } = useDataFetching();
	const router = useRouter();
	const { catalog } = router.query;

	const [pageData, setPageData] = useState<ICatalogData>(initialData);
	const {
		address,
		city,
		contract_type,
		description,
		id,
		price,
		property_type,
		real_estate_type,
		services,
		station,
		table,
		visibility,
	} = pageData;

	useEffect(() => {
		if (!router.isReady) return;

		data.map((value: ICatalogData) => {
			value.id === Number(catalog) && setPageData(value);
		});
	}, [data, router.query.catalog, router.isReady]);

	const fullAddress = `${city}, ${address}`;
	const tags = [property_type, real_estate_type];

	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<>
			<Meta title={city} desc={city} keyWords={['text']} />

			<CatalogPageCrumbs address={address} />
			<CatalogPageHeader city={city} address={address} price={price} tags={tags} />
			<section className={s.container}>
				<div>
					<CatalogPageCarousel id={id} />
					<CatalogPageDescription
						services={services}
						description={description}
						infoList={table && table}
					/>
					<CatalogPageAddress address={fullAddress} station={station} />
				</div>
				<aside>
					<div className={s.feedback}>
						<Feedback messageText={fullAddress + id} />
					</div>
				</aside>
			</section>
		</>
	);
});
CatalogPage.displayName = 'catalog';
export default CatalogPage;
