import { useContext } from 'react';
import { HeaderContext } from '@context/HeaderContext';

const NavigationBurgerButton = () => {
	const { handleMobileNavMode, isMobileNavMode } = useContext(HeaderContext);

	return (
		<button onClick={() => handleMobileNavMode(!isMobileNavMode)}>
			{isMobileNavMode ? 'close' : 'open'}
		</button>
	);
};

export default NavigationBurgerButton;
