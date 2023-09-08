import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

import { CATALOG_NAME } from '@utils/const';

import s from './CatalogPageCrumbs.module.scss';

const CatalogPageCrumbs: FC<{ address: string }> = ({ address }) => {
	const { t } = useTranslation('common');

	return (
		<article className={s.container}>
			<Link href="/">{t('NAVIGATION.MAIN')}/</Link>
			<Link href={`/${CATALOG_NAME}`}>{t('NAVIGATION.ALL_REAL_ESTATE')}/</Link>
			<p>{address}</p>
		</article>
	);
};

export default CatalogPageCrumbs;
