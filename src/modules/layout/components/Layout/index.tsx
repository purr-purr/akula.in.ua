import { useCallback, useEffect, useState, type ReactNode } from 'react';

import Footer from '@modules/layout/components/Footer';
import Header from '@modules/layout/components/Header';
import AppContext from '@modules/layout/context';
import cn from 'classnames';

import { useMediaQuery } from '@modules/common/hooks';

import { MOBILE_BREAKPOINT } from '@utils/const';

import s from './Layout.module.scss';

interface IChildrenProps {
	children: ReactNode;
}

const Layout = ({ children }: IChildrenProps) => {
	const isMobile = useMediaQuery(MOBILE_BREAKPOINT);
	const [isMobileNavMode, setIsMobileNavMode] = useState<boolean>(false);

	const handleMobileNavMode = useCallback((value: boolean) => {
		setIsMobileNavMode(value);
	}, []);

	const context = {
		isMobileNavMode,
		handleMobileNavMode,
	};

	useEffect(() => {
		const element = document.querySelector('html');
		if (!isMobile) {
			setIsMobileNavMode(false);
		}
		if (element) {
			element.setAttribute(
				'style',
				`${isMobileNavMode ? `overflow:hidden;` : ``}`,
			);
		}
	}, [isMobileNavMode, isMobile]);

	return (
		<AppContext.Provider value={context}>
			<main className={s.container}>
				<Header />
				<section className={cn('layout-container', s.content)}>{children}</section>
				<Footer />
			</main>
		</AppContext.Provider>
	);
};

export default Layout;
