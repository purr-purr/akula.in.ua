import {useEffect, useMemo, useState} from 'react';
import axios from 'axios';

import {BACKEND_LOCALHOST} from '@utils/const';

interface IGalleryList {
	original: string;
	thumbnail: string;
	video?: string;
}

const usePropertyPhoto = (id: number): IGalleryList[] => {
	const [fileList, setFileList] = useState<IGalleryList[]>([]);

	const getPath = useMemo(() => {
		return (fileName: string) =>
			require(`public/assets/property/production/${id}/${fileName}`).default;
	}, [id]);

	const getImageList = (data: string[]) => {
		const sortFiles = data.sort((a, b) => {
			const firstItemPattern = '1.';
			const lastItemPattern = '999';
			const beforeLastItemPattern = '998';

			if (a.includes(firstItemPattern) && !b.includes(firstItemPattern)) {
				return -1;
			} else if (!a.includes(firstItemPattern) && b.includes(firstItemPattern)) {
				return 1;
			} else if (a.includes(lastItemPattern) && !b.includes(lastItemPattern)) {
				return 1;
			} else if (!a.includes(lastItemPattern) && b.includes(lastItemPattern)) {
				return -1;
			} else if (a.includes(beforeLastItemPattern) && !b.includes(beforeLastItemPattern)) {
				return 1;
			} else if (!a.includes(beforeLastItemPattern) && b.includes(beforeLastItemPattern)) {
				return -1;
			} else {
				return a.localeCompare(b);
			}
		});

		const buildImagesList = sortFiles.map((filename: string) => {
			const videoRegExp = /(mp4|webm|mov)/;
			const isVideo = videoRegExp.test(filename);
			const filePath = getPath(filename);
			return {
				original: filePath.src,
				thumbnail: filePath.src,
				video: isVideo ? filePath : null,
			};
		});

		setFileList(buildImagesList);
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
		// eslint-disable-next-line
	}, [id]);

	return fileList;
};

export default usePropertyPhoto;
