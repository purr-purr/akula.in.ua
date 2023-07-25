import { FC, useEffect, useState } from 'react';

import DATA from '@data/data.json';

import s from './Pagination.module.scss';

import type { ICatalogItemData } from '@modules/common/types';

const Pagination: FC<{
	onPaginationSorting: (arg0: ICatalogItemData[]) => void;
}> = ({ onPaginationSorting }) => {
	const data: ICatalogItemData[] = DATA.filter(
		(item) => item.visibility === true && item,
	);

	const [currentPage, setCurrentPage] = useState<number>(1);
	const itemsPerPage: number = 9;
	const totalPages: number = Math.ceil(data.length / itemsPerPage);
	const startIndex: number = (currentPage - 1) * itemsPerPage;
	const endIndex: number = startIndex + itemsPerPage;
	const calcLastPageNumber: number = data.length / 10;
	const lastPage: number = Number(calcLastPageNumber.toFixed(0));

	const handlePageChange = (pageNumber: number): void =>
		setCurrentPage(pageNumber);
	const handlePrevBtn = () => currentPage > 1 && setCurrentPage(currentPage - 1);
	const handleNextBtn = () =>
		data.length !== currentPage && setCurrentPage(currentPage + 1);

	useEffect(() => {
		onPaginationSorting(data.slice(startIndex, endIndex));
	}, [startIndex, endIndex]);

	return data.length > 9 ? (
		<article className={s.container}>
			<button onClick={handlePrevBtn} disabled={currentPage === 1}>
				{'<='}
			</button>
			{Array.from({ length: totalPages }, (_, i) => i + 1).map((page: number) => (
				<button
					key={page}
					onClick={() => handlePageChange(page)}
					disabled={currentPage === page}
				>
					{page}
				</button>
			))}
			<button onClick={handleNextBtn} disabled={lastPage === currentPage - 1}>
				{'=>'}
			</button>
		</article>
	) : null;
};

export default Pagination;
