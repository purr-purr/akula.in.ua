import { createContext, FC, useCallback, useState } from 'react';

import type { ReactNode } from 'react';

interface ICatalogContext {
	isTestMode: boolean;
	handleTestMode: (isTestMode: boolean) => void;
}

const CatalogContext = createContext<ICatalogContext>({
	isTestMode: false,
	handleTestMode: () => {},
});

const CatalogContextWrapper: FC<{ children: ReactNode }> = ({ children }) => {
	const [isTestMode, setIsTestMode] = useState<boolean>(false);

	const handleTestMode = useCallback((value: boolean) => {
		setIsTestMode(value);
	}, []);

	const catalogContext: ICatalogContext = {
		isTestMode,
		handleTestMode,
	};

	return (
		<CatalogContext.Provider value={catalogContext}>
			{children}
		</CatalogContext.Provider>
	);
};

export { CatalogContextWrapper, CatalogContext };
