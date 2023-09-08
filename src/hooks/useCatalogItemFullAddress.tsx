import { useTranslation } from 'react-i18next';

import { formatCatalogTranslation, formatTranslation } from '@utils/formatters';

import type { ITransVersion } from '@t-types/data';

const useCatalogItemFullAddress = (
	realEstate: string,
	location: ITransVersion,
	address: ITransVersion,
) => {
	const { i18n, t } = useTranslation('common');
	const itemLocation = formatTranslation(i18n.language, location);
	const itemAddress = formatTranslation(i18n.language, address);
	const itemRealEstate = formatCatalogTranslation(realEstate);

	const getInString = itemLocation && t('IN') + ' ';
	const getLocationString = itemLocation && itemLocation + ' ';

	return (
		t(itemRealEstate) +
		' ' +
		getInString +
		getLocationString +
		t('ON') +
		' ' +
		itemAddress
	);
};

export default useCatalogItemFullAddress;
