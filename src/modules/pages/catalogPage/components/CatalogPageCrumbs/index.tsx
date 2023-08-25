import { FC } from 'react';

import s from './CatalogPageCrumbs.module.scss';

const CatalogPageCrumbs: FC<{ address: string }> = ({ address }) => {
	return <article className={s.container}>Home/Catalog/{address}</article>;
};

export default CatalogPageCrumbs;
