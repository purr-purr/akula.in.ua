import { createContext, FC, useCallback, useState } from 'react';

import { initialFilters } from '@utils/filters';

import type { IFilters } from '@t-types/filters';
import type { ReactNode } from 'react';

interface ICatalogContext {
	filters: IFilters;
	handleFilters: (filters: IFilters) => void;
}

const CatalogContext = createContext<ICatalogContext>({
	filters: initialFilters,
	handleFilters: () => {},
});

const CatalogContextWrapper: FC<{ children: ReactNode }> = ({ children }) => {
	const [filters, setFilters] = useState<IFilters>(initialFilters);
	const handleFilters = useCallback((value: IFilters) => {
		setFilters(value);
	}, []);

	const catalogContext: ICatalogContext = {
		filters,
		handleFilters,
	};

	return (
		<CatalogContext.Provider value={catalogContext}>
			{children}
		</CatalogContext.Provider>
	);
};

export { CatalogContextWrapper, CatalogContext };
