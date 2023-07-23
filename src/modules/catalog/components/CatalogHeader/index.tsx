import { FC } from 'react';

import s from './CatalogHeader.module.scss';

const CatalogHeader: FC = () => {
	return (
		<section className={s.container}>
			<h1>Catalog Page Header</h1>
		</section>
	);
};

export default CatalogHeader;
