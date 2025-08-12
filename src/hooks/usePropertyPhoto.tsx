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
		const rules = [
			{test: s => s.includes('1.'), weight: 0},
			{test: s => s.includes('998'), weight: 2},
			{test: s => s.includes('999'), weight: 3},
		];

		const score = s => {
			for (const {test, weight} of rules) if (test(s)) return weight;
			return 1;
		};

		const sortFiles = [...data].sort((a, b) => (score(a) - score(b)) || a.localeCompare(b));

		const buildImagesList = sortFiles.map((filename: string) => {
			const videoRegExp = /(mp4|webm|mov|MOV|WEBM|MP4)/;
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

	console.log(`fileList`, fileList)
	return fileList;
};

export default usePropertyPhoto;
