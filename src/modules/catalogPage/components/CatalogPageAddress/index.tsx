import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { GOOGLE_MAPS_API_KEY } from '@utils/const';

import s from './CatalogPageAddress.module.scss';

const CatalogPageAddress: FC<{ address: string; station?: string }> = ({
	address,
	station,
}) => {
	const { i18n } = useTranslation();
	const lang = i18n.language === 'ua' ? 'uk' : i18n.language;
	const encodedAddress = encodeURIComponent(address);
	const embeddedMapURL = `https://www.google.com/maps/embed/v1/place?q=${encodedAddress}&key=${GOOGLE_MAPS_API_KEY}&language=${lang}`;

	return (
		<article className={s.container}>
			<h4>Address</h4>
			<p>{address}</p>
			{station && <p>{station}</p>}
			<iframe className={s.map} src={embeddedMapURL} allowFullScreen />
		</article>
	);
};

export default CatalogPageAddress;
