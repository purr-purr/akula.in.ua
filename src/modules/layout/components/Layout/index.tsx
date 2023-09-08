import { type ReactNode } from 'react';
import { CatalogContextWrapper } from '@context/CatalogContext';
import { HeaderContextWrapper } from '@context/HeaderContext';
import cn from 'classnames';

import Footer from '@modules/layout/components/Footer';
import Header from '@modules/layout/components/Header';

import s from './Layout.module.scss';

interface IChildrenProps {
	children: ReactNode;
}

const Layout = ({ children }: IChildrenProps) => {
	return (
		<main className={s.container}>
			<HeaderContextWrapper>
				<Header />
			</HeaderContextWrapper>
			<section className={cn('layout-container', s.content)}>
				<CatalogContextWrapper>{children}</CatalogContextWrapper>
			</section>
			<Footer />
		</main>
	);
};

export default Layout;
