import Link from 'next/link';

import { DYNAMIC_PAGE_CATALOG_NAME } from '@utils/const';

export default function Catalog() {
	return (
		<div>
			<h1>Catalog page</h1>
			<div>
				<Link href={`/${DYNAMIC_PAGE_CATALOG_NAME}/js`}>JS</Link>
				<br />
				<br />
				<Link href={`/${DYNAMIC_PAGE_CATALOG_NAME}/react`}>React</Link>
			</div>
		</div>
	);
}
