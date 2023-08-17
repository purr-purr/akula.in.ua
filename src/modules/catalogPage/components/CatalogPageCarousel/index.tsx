import { FC, useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';

import { BACKEND_LOCALHOST } from '@utils/const';

import s from './CatalogPageCarousel.module.scss';

const CatalogPageCarousel: FC<{ id: number }> = ({ id }) => {
	const [fileList, setFileList] = useState<string[]>([]);

	useEffect(() => {
		const fetchFileList = async () => {
			try {
				const response = await axios.get<string[]>(
					`${BACKEND_LOCALHOST}/filenames/${id}`,
				);
				setFileList(response.data);
			} catch (error) {
				console.error(
					`>>> Error fetching Images file list => for id-${id} object:`,
					error,
				);
			}
		};

		if (id >= 1) {
			fetchFileList().then();
		}
	}, [id]);

	const getPath = useMemo(() => {
		return (fileName: string) =>
			require(`public/assets/property/${id}/${fileName}`).default;
	}, [id]);

	return (
		<article className={s.container}>
			{fileList &&
				fileList.map((fileName: any) => (
					<Image key={fileName} src={getPath(fileName)} alt="Catalog Image" />
				))}
		</article>
	);
};

export default CatalogPageCarousel;
