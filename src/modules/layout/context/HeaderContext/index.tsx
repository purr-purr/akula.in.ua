import {createContext, FC, type ReactNode, useCallback, useState} from 'react';
import {useMediaQuery} from "@modules/common/hooks";
import {MOBILE_BREAKPOINT} from "@utils/const";

interface IHeaderContext {
	isMobileNavMode: boolean;
	handleMobileNavMode: (isDarkMode: boolean) => void;
}

const HeaderContext = createContext<IHeaderContext>({
	isMobileNavMode: false,
	handleMobileNavMode: () => {
	},
});

const HeaderContextWrapper: FC<{ children: ReactNode }> = ({children}) => {
	const isMobile = useMediaQuery(MOBILE_BREAKPOINT);
	const [isMobileNavMode, setIsMobileNavMode] = useState<boolean>(false);

	const handleMobileNavMode = useCallback((value: boolean) => {
		setIsMobileNavMode(value);
	}, []);

	const headerContext: IHeaderContext = {
		isMobileNavMode,
		handleMobileNavMode,
	};

	console.log('header', isMobileNavMode);

	if (!isMobile) {
		return <>{children}</>;
	}

	return (
		<HeaderContext.Provider value={headerContext}>
			{children}
		</HeaderContext.Provider>
	);
};

export {HeaderContextWrapper, HeaderContext};
