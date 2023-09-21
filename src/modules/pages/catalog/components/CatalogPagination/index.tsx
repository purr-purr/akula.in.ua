import { FC, useContext, useEffect, useState } from 'react';
import { CatalogContext } from '@context/CatalogContext';

import IconSliderButton from '@icons/components/IconSliderButton';

import type { ICatalogData } from '@t-types/data';

import s from './CatalogPagination.module.scss';

const CatalogPagination: FC<{
	onPaginationSorting: (arg0: ICatalogData[]) => void;
	data: ICatalogData[];
}> = ({ onPaginationSorting, data }) => {
	const [currentPage, setCurrentPage] = useState<number>(1);
	const { filters } = useContext(CatalogContext);

	const itemsPerPage: number = 9;
	const totalPages: number = Math.ceil(data.length / itemsPerPage);
	const startIndex: number = (currentPage - 1) * itemsPerPage;
	const endIndex: number = startIndex + itemsPerPage;
	const calcLastPageNumber: number = data.length / 10;
	const lastPage: number = Number(calcLastPageNumber.toFixed(0));

	const handlePageChange = (pageNumber: number): void => {
		setCurrentPage(pageNumber);
	};

	const handlePrevBtn = () => {
		currentPage > 0 && setCurrentPage(currentPage - 1);
	};

	const handleNextBtn = () => {
		currentPage <= 6 && setCurrentPage(currentPage + 1);
	};

	useEffect(() => {
		onPaginationSorting(data.slice(startIndex, endIndex));
		// eslint-disable-next-line
	}, [data, startIndex, endIndex]);

	useEffect(() => {
		setCurrentPage(1);
	}, [filters]);

	return data.length > 9 ? (
		<article className={s.container}>
			<button onClick={handlePrevBtn} disabled={currentPage === 1}>
				<IconSliderButton />
			</button>
			{Array.from({ length: totalPages }, (_, i) => i + 1).map((page: number) => (
				<button
					key={page}
					className={s[`page-button`]}
					style={{ minWidth: page > 9 ? '27px' : '17px' }}
					onClick={() => handlePageChange(page)}
					disabled={currentPage === page}
				>
					{page}
				</button>
			))}
			<button
				className={s[`next-button`]}
				onClick={handleNextBtn}
				disabled={currentPage - 1 === lastPage}
			>
				<IconSliderButton />
			</button>
		</article>
	) : null;
};

export default CatalogPagination;
