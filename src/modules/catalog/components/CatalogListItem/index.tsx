import { FC } from 'react';
import Link from 'next/link';

import { DYNAMIC_PAGE_CATALOG_NAME } from '@utils/const';

import { ICatalogItemData } from '@modules/common/types';

const CatalogListItem: FC<{
	props: ICatalogItemData;
}> = ({ props }) => {
	return (
		<li>
			<Link href={`/${DYNAMIC_PAGE_CATALOG_NAME}/${props._id}`}>
				{props.city + '' + props._id}
			</Link>
		</li>
	);
};

export default CatalogListItem;
