import { FC, memo, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import FeedbackForm from '@modules/common/components/FeedbackForm';
import Loader from '@modules/common/components/Loader';
import Meta from '@modules/common/components/Meta';
import { useDataFetching } from '@modules/common/hooks';
import CatalogPageAddress from '@modules/pages/catalogPage/components/CatalogPageAddress';
import CatalogPageCarousel from '@modules/pages/catalogPage/components/CatalogPageCarousel';
import CatalogPageCrumbs from '@modules/pages/catalogPage/components/CatalogPageCrumbs';
import CatalogPageDescription from '@modules/pages/catalogPage/components/CatalogPageDescription';
import CatalogPageHeader from '@modules/pages/catalogPage/components/CatalogPageHeader';

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
		description,
		id,
		price,
		property_type,
		real_estate_type,
		services,
		station,
		table,
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
		return <Loader />;
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
						infoList={table}
					/>
					<CatalogPageAddress city={city} address={address} station={station} />
				</div>
				<aside>
					<div className={s.feedback}>
						<FeedbackForm message={fullAddress + id} />
					</div>
				</aside>
			</section>
		</>
	);
});
CatalogPage.displayName = 'catalog';
export default CatalogPage;
