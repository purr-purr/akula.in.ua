import { FC, memo, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import CatalogPageAddress from '@modules/catalogPage/components/CatalogPageAddress';
import CatalogPageCarousel from '@modules/catalogPage/components/CatalogPageCarousel';
import CatalogPageCrumbs from '@modules/catalogPage/components/CatalogPageCrumbs';
import CatalogPageDescription from '@modules/catalogPage/components/CatalogPageDescription';
import CatalogPageHeader from '@modules/catalogPage/components/CatalogPageHeader';
import Feedback from '@modules/common/components/Feedback';
import Meta from '@modules/common/components/Meta';

import DATA from '@data/data.json';

import s from './CatalogPage.module.scss';

import { ICatalogItemData } from '@modules/common/types';

const CatalogPage: FC = memo(() => {
	const router = useRouter();
	const { catalog } = router.query;

	const initialState: ICatalogItemData = {
		_id: 9999,
		type: 'rent',
		visibility: true,
		city: '',
		address: '',
		station: '',
		price: '',
		pictures: ['default'],
		tags: ['default'],
		info: [{ title: '', value: '' }],
		description: '',
	};

	const [pageData, setPageData] = useState<ICatalogItemData>(initialState);
	const { city, address, price, tags, description, info, station, _id } =
		pageData;
	useEffect(() => {
		if (!router.isReady) return;

		DATA.map((value: ICatalogItemData) => {
			value._id === Number(catalog) && setPageData(value);
		});
	}, [router.query.catalog, router.isReady]);

	const fullAddress = `${city}, ${address}`;

	return (
		<>
			<Meta title={city} desc={city} keyWords={['text']} />

			<CatalogPageCrumbs address={address} />
			<CatalogPageHeader city={city} address={address} price={price} tags={tags} />
			<section className={s.container}>
				<div>
					<CatalogPageCarousel />
					<CatalogPageDescription description={description} infoList={info} />
					<CatalogPageAddress address={fullAddress} station={station} />
				</div>
				<aside>
					<div className={s.feedback}>
						<Feedback messageText={fullAddress + _id} />
					</div>
				</aside>
			</section>
		</>
	);
});
CatalogPage.displayName = 'catalog';
export default CatalogPage;
