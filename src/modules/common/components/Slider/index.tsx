import { FC } from 'react';
import ImageGallery from 'react-image-gallery';

import 'react-image-gallery/styles/css/image-gallery.css';
import s from './Slider.module.scss';

const Slider: FC = () => {
	const images = [
		{
			original: 'https://picsum.photos/id/1018/1000/600/',
			thumbnail: 'https://picsum.photos/id/1018/250/150/',
		},
		{
			original: 'https://picsum.photos/id/1015/1000/600/',
			thumbnail: 'https://picsum.photos/id/1015/250/150/',
		},
		{
			original: 'https://picsum.photos/id/1019/1000/600/',
			thumbnail: 'https://picsum.photos/id/1019/250/150/',
		},
	];
	return (
		<div className="cont">
			<ImageGallery
				showPlayButton={false}
				showBullets
				items={images}
				additionalClass={s.image}
			/>
		</div>
	);
};

export default Slider;
