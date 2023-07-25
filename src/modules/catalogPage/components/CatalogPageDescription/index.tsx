import { FC } from 'react';

import { v4 as id } from 'uuid';

import s from './CatalogPageDescription.module.scss';

const CatalogPageDescription: FC<{
	description: string;
	infoList: { [key: string]: string }[];
}> = ({ description, infoList }) => {
	return (
		<article className={s.container}>
			<h4>Info</h4>
			<table className={s.table}>
				<tbody>
					{infoList.map((item) => (
						<tr key={id()}>
							<td>{item.title}</td>
							<td>{item.value}</td>
						</tr>
					))}
				</tbody>
			</table>

			<h4>Description</h4>
			<p>{description}</p>
		</article>
	);
};

export default CatalogPageDescription;
