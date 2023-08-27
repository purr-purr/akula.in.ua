import { FC } from 'react';
import ImageGallery from 'react-image-gallery';

import usePropertyPhoto from '../../../../common/hooks/usePropertyPhoto';
import s from './CatalogPageCarousel.module.scss';

import 'react-image-gallery/styles/css/image-gallery.css';

const CatalogPageCarousel: FC<{ id: number }> = ({ id }) => {
	const postersList = usePropertyPhoto(id);

	return (
		<article className={s.container}>
			<ImageGallery
				showPlayButton={false}
				showBullets
				items={postersList}
				additionalClass={s.gallery}
			/>
		</article>
	);
};

export default CatalogPageCarousel;
