import { useTranslation } from 'react-i18next';

const useFullAddress = (
	realEstate: string,
	location: string,
	address: string,
) => {
	const { t } = useTranslation('common');
	return `${realEstate} ${t('IN')} ${location} ${t('ON')} ${address}`;
};

export default useFullAddress;
