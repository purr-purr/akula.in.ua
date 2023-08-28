import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { formatTranslation } from '@utils/formatters';

import type { ITransVersion } from '@modules/common/types';

import s from './CatalogPageCrumbs.module.scss';

const CatalogPageCrumbs: FC<{ address: ITransVersion }> = ({ address }) => {
	const { i18n } = useTranslation();
	return (
		<article className={s.container}>
			Home/Catalog/{formatTranslation(i18n.language, address)}
		</article>
	);
};

export default CatalogPageCrumbs;
