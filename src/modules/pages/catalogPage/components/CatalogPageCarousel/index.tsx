import { FC } from 'react';
import ImageGallery from 'react-image-gallery';

import { useMediaQuery, usePropertyPhoto } from '@hooks/index';

import s from './CatalogPageCarousel.module.scss';

import 'react-image-gallery/styles/css/image-gallery.css';
import cn from 'classnames';

import DefaultPoster from '@modules/common/components/DefaultPoster';
import IconSliderButton from '@modules/icons/components/IconSliderButton';

import { TABLET_BREAKPOINT } from '@utils/const';

const CatalogPageCarousel: FC<{ id: number }> = ({ id }) => {
	const isTablet = useMediaQuery(TABLET_BREAKPOINT);
	const postersList = usePropertyPhoto(id);

	return (
		<article
			className={cn(
				s.container,
				postersList.length <= 0 ? s[`container--empty`] : null,
			)}
		>
			{postersList.length ? (
				<ImageGallery
					showNav={!isTablet}
					showThumbnails={!isTablet}
					showPlayButton={false}
					showBullets
					lazyLoad
					items={postersList}
					additionalClass={s.gallery}
					renderLeftNav={(onClick, disabled) => (
						<button className={s.prevButton} onClick={onClick} disabled={disabled}>
							<IconSliderButton />
						</button>
					)}
					renderRightNav={(onClick, disabled) => (
						<button className={s.nextButton} onClick={onClick} disabled={disabled}>
							<IconSliderButton />
						</button>
					)}
				/>
			) : (
				<DefaultPoster />
			)}
		</article>
	);
};

export default CatalogPageCarousel;
