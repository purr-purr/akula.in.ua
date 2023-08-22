import CatalogHeader from '@modules/catalog/components/CatalogHeader';
import CatalogList from '@modules/catalog/components/CatalogList';
import CatalogSort from '@modules/catalog/components/CatalogSort';
import Filter from '@modules/common/components/Filter';

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
