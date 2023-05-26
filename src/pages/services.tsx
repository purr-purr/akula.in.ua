import { FC, useState } from 'react';

const Services: FC = () => {
	const itemsPerPage = 10;
	const [currentPage, setCurrentPage] = useState<number>(1);
	const items: string[] = Array.from({ length: 116 }, (_, i) => i + ' test');

	const totalPages: number = Math.ceil(items.length / itemsPerPage);
	const startIndex: number = (currentPage - 1) * itemsPerPage;
	const endIndex: number = startIndex + itemsPerPage;

	const currentItems = items.slice(startIndex, endIndex);

	const handlePageChange = (pageNumber: number): void => {
		setCurrentPage(pageNumber);
	};

	const handlePagePrev = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
		}
	};

	const handlePageNext = () => {
		if (items.length !== currentPage) {
			setCurrentPage(currentPage + 1);
		}
	};

	const calcLastPageNumber = items.length / 10;
	const getLastPageNumber = Number(calcLastPageNumber.toFixed(0));

	return (
		<div>
			<h1>Services page</h1>

			<div>
				<ul>
					{currentItems.map((item) => (
						<li key={item}>{item}</li>
					))}
				</ul>
				<div>
					<button onClick={() => handlePagePrev()} disabled={currentPage === 1}>
						prev
					</button>
					{Array.from({ length: totalPages }, (_, i) => i + 1).map(
						(page: number) => (
							<button
								key={page}
								onClick={() => handlePageChange(page)}
								disabled={currentPage === page}
							>
								{page}
							</button>
						),
					)}

					<button
						onClick={() => handlePageNext()}
						disabled={getLastPageNumber === currentPage}
					>
						next
					</button>
				</div>
			</div>
		</div>
	);
};
export default Services;
