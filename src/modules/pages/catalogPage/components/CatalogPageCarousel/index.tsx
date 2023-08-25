import { FC, useEffect, useMemo, useState } from 'react';
import ImageGallery from 'react-image-gallery';
import axios from 'axios';

import { BACKEND_LOCALHOST } from '@utils/const';

import 'react-image-gallery/styles/css/image-gallery.css';
import s from './CatalogPageCarousel.module.scss';

interface IGalleryList {
	original: string;
	thumbnail: string;
}

const CatalogPageCarousel: FC<{ id: number }> = ({ id }) => {
	const [fileList, setFileList] = useState<IGalleryList[]>([]);

	const getPath = useMemo(() => {
		return (fileName: string) =>
			require(`public/assets/property/${id}/${fileName}`).default;
	}, [id]);

	const getImageList = (data: string[]) => {
		const importedImages = data.map((filename: string) => {
			return {
				original: getPath(filename).src,
				thumbnail: getPath(filename).src,
			};
		});
		setFileList(importedImages);
	};

	useEffect(() => {
		const fetchFileList = async () => {
			try {
				const response = await axios.get<string[]>(
					`${BACKEND_LOCALHOST}/filenames/${id}`,
				);
				getImageList(response.data);
			} catch (error) {
				console.error(
					`Error fetching Images file list => for id-${id} object:`,
					error,
				);
			}
		};

		if (id >= 1) {
			fetchFileList().then();
		}
	}, [id]);

	return (
		<article className={s.container}>
			<ImageGallery
				showPlayButton={false}
				showBullets
				items={fileList}
				additionalClass={s.gallery}
			/>
		</article>
	);
};

export default CatalogPageCarousel;
