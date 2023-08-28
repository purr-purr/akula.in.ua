import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { ITransVersion } from '@modules/common/types';

import { GOOGLE_SERVICES } from '@utils/const';
import { formatTranslation } from '@utils/formatters';

import s from './CatalogPageAddress.module.scss';

const CatalogPageAddress: FC<{
	address: ITransVersion;
	station: ITransVersion;
	city: string;
}> = ({ address, station, city }) => {
	const { i18n } = useTranslation();

	// TODO Check this two const's
	const changedLangCode = i18n.language === 'ua' ? 'uk' : i18n.language;
	const lang = changedLangCode ? changedLangCode : 'en';

	const localAddress = formatTranslation(i18n.language, address);
	const fullAddress = city + ' ' + localAddress;

	const encodedAddress = encodeURIComponent(fullAddress);
	const embeddedMapURL = `https://www.google.com/maps/embed/v1/place?q=${encodedAddress}&key=${GOOGLE_SERVICES.GOOGLE_MAPS_API_KEY}&language=${lang}`;

	return (
		<article className={s.container}>
			<h4>Address</h4>
			{address && <p>{fullAddress}</p>}
			{station && <p>{formatTranslation(i18n.language, station)}</p>}
			<iframe className={s.map} src={embeddedMapURL} allowFullScreen />
		</article>
	);
};

export default CatalogPageAddress;
