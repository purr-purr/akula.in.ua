import { createContext, FC, useCallback, useState } from 'react';

import { useMediaQuery } from '@hooks/index';
import { TABLET_BREAKPOINT } from '@utils/const';

import type { ReactNode } from 'react';

interface IHeaderContext {
	isMobileNavMode: boolean;
	handleMobileNavMode: (isDarkMode: boolean) => void;
}

const HeaderContext = createContext<IHeaderContext>({
	isMobileNavMode: false,
	handleMobileNavMode: () => {},
});

const HeaderContextWrapper: FC<{ children: ReactNode }> = ({ children }) => {
	const isTablet = useMediaQuery(TABLET_BREAKPOINT);
	const [isMobileNavMode, setIsMobileNavMode] = useState<boolean>(false);

	const handleMobileNavMode = useCallback((value: boolean) => {
		setIsMobileNavMode(value);
	}, []);

	const headerContext: IHeaderContext = {
		isMobileNavMode,
		handleMobileNavMode,
	};

	if (!isTablet) {
		return <>{children}</>;
	}

	return (
		<HeaderContext.Provider value={headerContext}>
			{children}
		</HeaderContext.Provider>
	);
};

export { HeaderContextWrapper, HeaderContext };
