import { createContext } from 'react';

interface HeaderContextType {
	isMobileNavMode: boolean;
	handleMobileNavMode: (isDarkMode: boolean) => void;
}

const HeaderContext = createContext<HeaderContextType>({
	isMobileNavMode: false,
	handleMobileNavMode: () => {},
});

export default HeaderContext;
