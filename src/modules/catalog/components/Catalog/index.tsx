import CatalogHeader from '@modules/catalog/components/CatalogHeader';
import CatalogList from '@modules/catalog/components/CatalogList';
import Filter from '@modules/common/components/Filter';

const Catalog = () => {
	return (
		<>
			<CatalogHeader />
			<Filter />
			<CatalogList />
		</>
	);
};

export default Catalog;
