import { FC } from 'react';
import ImageGallery from 'react-image-gallery';

import usePropertyPhoto from '../../../../common/hooks/usePropertyPhoto';
import s from './CatalogPageCarousel.module.scss';

import 'react-image-gallery/styles/css/image-gallery.css';
import IconSliderButton from '@modules/icons/components/IconSliderButton';

const CatalogPageCarousel: FC<{ id: number }> = ({ id }) => {
	const postersList = usePropertyPhoto(id);

	return (
		<article className={s.container}>
			<ImageGallery
				showPlayButton={false}
				showBullets
				items={postersList}
				additionalClass={s.gallery}
				renderLeftNav={(onClick, disabled) => (
					<button className={s[`prev-button`]} onClick={onClick} disabled={disabled}>
						<IconSliderButton />
					</button>
				)}
				renderRightNav={(onClick, disabled) => (
					<button className={s[`next-button`]} onClick={onClick} disabled={disabled}>
						<IconSliderButton />
					</button>
				)}
			/>
		</article>
	);
};

export default CatalogPageCarousel;
