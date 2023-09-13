import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

import InnerLink from '@modules/common/components/InnerLink';

import { useMediaQuery } from '@hooks/index';
import { CATALOG_NAME, TABLET_BREAKPOINT } from '@utils/const';

import s from './CatalogPageCrumbs.module.scss';

const CatalogPageCrumbs: FC<{ address: string }> = ({ address }) => {
	const { t } = useTranslation('common');
	const isTablet = useMediaQuery(TABLET_BREAKPOINT);

	return (
		<article className={s.container}>
			{isTablet ? (
				<InnerLink
					isReverseType
					type="link"
					linkPath={`/${CATALOG_NAME}`}
					text={t('NAVIGATION.TO_THE_CATALOGUE')}
				/>
			) : (
				<>
					<Link href="/">{t('NAVIGATION.MAIN')}/</Link>
					<Link href={`/${CATALOG_NAME}`}>{t('NAVIGATION.ALL_REAL_ESTATE')}/</Link>
					<p>{address}</p>
				</>
			)}
		</article>
	);
};

export default CatalogPageCrumbs;
