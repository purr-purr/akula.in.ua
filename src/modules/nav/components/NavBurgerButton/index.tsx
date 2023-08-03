import {useContext} from 'react';

import {HeaderContext} from '@modules/layout/context/HeaderContext';

const NavBurgerButton = () => {
	const {handleMobileNavMode, isMobileNavMode} = useContext(HeaderContext);

	return (
		<button onClick={() => handleMobileNavMode(!isMobileNavMode)}>
			{isMobileNavMode ? 'close' : 'open'}
		</button>
	);
};

export default NavBurgerButton;
