import {FC} from 'react';

import s from './CatalogPageVideo.module.scss';

const CatalogPageVideo: FC<{
	source: string;
}> = ({source}) => {
	return (
		<video className={s.container} controls>
			<source src={source} type="video/mp4"/>
			Your browser does not support the video tag.
		</video>
	);
}

export default CatalogPageVideo;
