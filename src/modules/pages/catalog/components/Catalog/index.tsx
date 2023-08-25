import Filter from '@modules/common/components/Filter';
import CatalogHeader from '@modules/pages/catalog/components/CatalogHeader';
import CatalogList from '@modules/pages/catalog/components/CatalogList';
import CatalogSort from '@modules/pages/catalog/components/CatalogSort';

const Catalog = () => {
	return (
		<>
			<CatalogHeader />
			<Filter side="center" />
			<CatalogSort />
			<CatalogList />
		</>
	);
};

export default Catalog;
