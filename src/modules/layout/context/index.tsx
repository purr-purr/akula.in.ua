import { createContext } from 'react';

type AppContextType = {
	isMobileNavMode: boolean;
	handleMobileNavMode: (isDarkMode: boolean) => void;
};

const AppContext = createContext<AppContextType>({
	isMobileNavMode: false,
	handleMobileNavMode: () => {},
});

export default AppContext;
