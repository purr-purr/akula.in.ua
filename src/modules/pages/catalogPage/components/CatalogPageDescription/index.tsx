import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { v4 as uniqueId } from 'uuid';

import { formatTranslation } from '@utils/formatters';

import type { ICatalogTable, ITransVersion } from '@modules/common/types';

import s from './CatalogPageDescription.module.scss';

const CatalogPageDescription: FC<{
	description: ITransVersion;
	services: ITransVersion;
	infoList: ICatalogTable | undefined;
}> = ({ description, infoList, services }) => {
	const { i18n } = useTranslation();

	const servicesText = formatTranslation(i18n.language, services);
	const descriptionText = formatTranslation(i18n.language, description);

	const mappedArray =
		infoList &&
		Object.entries(infoList)
			.map(([key, value]) => {
				if (value) {
					return {
						key: key,
						value: value,
					};
				}
			})
			.filter(Boolean);

	return (
		<article className={s.container}>
			<h4>Info</h4>
			<table className={s.table}>
				<tbody>
					{mappedArray?.map((item) => (
						<tr key={uniqueId()}>
							<td>{item?.key}</td>
							<td>{item?.value}</td>
						</tr>
					))}
				</tbody>
			</table>

			{descriptionText && (
				<>
					<h4>Description</h4>
					<p
						dangerouslySetInnerHTML={{
							__html: descriptionText || '',
						}}
					/>
				</>
			)}

			{servicesText && (
				<>
					<h4>Services</h4>
					<p>{servicesText}</p>
				</>
			)}
		</article>
	);
};

export default CatalogPageDescription;
