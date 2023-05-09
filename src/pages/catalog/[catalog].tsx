import { FC, memo, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Meta from '@modules/common/components/Meta';

import data from '@data/data.json';

import { ICheatsData } from '@modules/common/types';

const Catalog: FC = memo(() => {
	const router = useRouter();
	const { catalog } = router.query;
	const initialState = {
		catalog: '',
		_id: 0,
		title: '',
	};
	const [pageData, setPageData] = useState<ICheatsData>(initialState);

	useEffect(() => {
		if (!router.isReady) return;
		data.map((item) => item.catalog === catalog && setPageData(item));
	}, [router.query.catalog, router.isReady]);

	return (
		<>
			<Meta title={pageData.title} desc={pageData.title} keyWords={['text']} />

			{pageData.title}
			<br />
			{pageData._id}
		</>
	);
});
Catalog.displayName = 'catalog';
export default Catalog;
