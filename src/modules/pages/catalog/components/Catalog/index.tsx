import { useTranslation } from 'react-i18next';

import Filter from '@modules/common/components/Filter';
import Meta from '@modules/common/components/Meta';
import CatalogHeader from '@modules/pages/catalog/components/CatalogHeader';
import CatalogList from '@modules/pages/catalog/components/CatalogList';

const Catalog = () => {
	const { t } = useTranslation('common');
	return (
		<>
			<Meta
				title={t('NAVIGATION.ALL_REAL_ESTATE')}
				desc="desc"
				keyWords={['keywords']}
			/>
			<CatalogHeader />
			<Filter side="center" />
			<CatalogList />
		</>
	);
};

export default Catalog;
