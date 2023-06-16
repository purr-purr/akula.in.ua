import { FC, memo, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Feedback from '@modules/common/components/Feedback';
import Meta from '@modules/common/components/Meta';

import DATA from '@data/data.json';

import { ICatalogItemData } from '@modules/common/types';

const Catalog: FC = memo(() => {
	const router = useRouter();
	const { catalog } = router.query;

	const initialState = {
		_id: 9999,
		city: '',
		address: '',
		subAddress: '',
		price: '',
		pictures: ['default'],
		tags: ['default'],
		info: [{ contractType: '' }],
		description: '',
	};
	const [pageData, setPageData] = useState<ICatalogItemData>(initialState);

	useEffect(() => {
		if (!router.isReady) return;
		DATA.map((item) => item._id === Number(catalog) && setPageData(item));
	}, [router.query.catalog, router.isReady]);

	console.log(pageData.address + pageData._id);

	return (
		<>
			<Meta title={pageData.city} desc={pageData.city} keyWords={['text']} />

			{pageData.city + ' ' + pageData._id}

			<Feedback messageText={pageData.address + pageData._id} />
		</>
	);
});
Catalog.displayName = 'catalog';
export default Catalog;
