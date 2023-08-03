import {type ReactNode} from 'react';

import Footer from '@modules/layout/components/Footer';
import Header from '@modules/layout/components/Header';
import {HeaderContextWrapper} from '@modules/layout/context/HeaderContext';
import cn from 'classnames';

import s from './Layout.module.scss';
import {CatalogContextWrapper} from "@modules/layout/context/CatalogContext";

interface IChildrenProps {
	children: ReactNode;
}

const Layout = ({children}: IChildrenProps) => {
	return (
		<main className={s.container}>
			<HeaderContextWrapper>
				<Header/>
			</HeaderContextWrapper>
			<section
				className={cn('layout-container', s.content)}>
				<CatalogContextWrapper>
					{children}
				</CatalogContextWrapper>
			</section>
			<Footer/>
		</main>
	);
};

export default Layout;
