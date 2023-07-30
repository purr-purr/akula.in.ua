import {FC, memo, useEffect, useState} from 'react';
import {useRouter} from 'next/router';

import CatalogPageAddress
	from '@modules/catalogPage/components/CatalogPageAddress';
import CatalogPageCarousel
	from '@modules/catalogPage/components/CatalogPageCarousel';
import CatalogPageCrumbs
	from '@modules/catalogPage/components/CatalogPageCrumbs';
import CatalogPageDescription
	from '@modules/catalogPage/components/CatalogPageDescription';
import CatalogPageHeader
	from '@modules/catalogPage/components/CatalogPageHeader';
import Feedback from '@modules/common/components/Feedback';
import Meta from '@modules/common/components/Meta';

import s from './CatalogPage.module.scss';

import type {ICatalogItemData} from '@modules/common/types';
import {useDataFetching} from "@modules/common/hooks";

const CatalogPage: FC = memo(() => {
	const {dataList, loading} = useDataFetching();
	const router = useRouter();
	const {catalog} = router.query;

	const initialState: ICatalogItemData = {
		_id: 0,
		visibility: true,
		contractType: 'rent',
		propertyType: '',
		realEstateType: '',
		city: '',
		address: '',
		station: '',
		price: '',
		info: [{title: '', value: ''}],
		description: '',
		services: '',
	};

	const [pageData, setPageData] = useState<ICatalogItemData>(initialState);
	const {
		city,
		address,
		price,
		description,
		info,
		station,
		_id,
		services,
		propertyType,
		realEstateType,
	} = pageData;

	useEffect(() => {
		if (!router.isReady) return;

		dataList.map((value: ICatalogItemData) => {
			value._id === Number(catalog) && setPageData(value);
		});
	}, [dataList, router.query.catalog, router.isReady]);

	const fullAddress = `${city}, ${address}`;
	const tags = [propertyType, realEstateType];

	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<>
			<Meta title={city} desc={city} keyWords={['text']}/>

			<CatalogPageCrumbs address={address}/>
			<CatalogPageHeader
				city={city}
				address={address}
				price={price}
				tags={tags}
			/>
			<section className={s.container}>
				<div>
					<CatalogPageCarousel id={_id}/>
					<CatalogPageDescription
						services={services}
						description={description}
						infoList={info}
					/>
					<CatalogPageAddress address={fullAddress} station={station}/>
				</div>
				<aside>
					<div className={s.feedback}>
						<Feedback messageText={fullAddress + _id}/>
					</div>
				</aside>
			</section>
		</>
	);
});
CatalogPage.displayName = 'catalog';
export default CatalogPage;
