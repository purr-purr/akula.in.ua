import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { GOOGLE_SERVICES } from '@utils/credentials';

import s from './CatalogPageMap.module.scss';

const CatalogPageMap: FC<{
	fullAddress: string;
}> = ({ fullAddress }) => {
	const { i18n } = useTranslation();

	const lang = i18n.language === 'ua' ? 'uk' : i18n.language;
	const encodedAddress = encodeURIComponent(fullAddress);

	const embeddedMapURL = `https://www.google.com/maps/embed/v1/place?q=${encodedAddress}&key=${GOOGLE_SERVICES.GOOGLE_MAPS_API_KEY}&language=${lang}`;

	return <iframe className={s.container} src={embeddedMapURL} allowFullScreen />;
};

export default CatalogPageMap;
