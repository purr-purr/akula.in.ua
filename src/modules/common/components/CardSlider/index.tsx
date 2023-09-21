import { Children, cloneElement, FC, isValidElement } from 'react';
import cn from 'classnames';
import Carousel from 'nuka-carousel';
import { v4 as uniqueId } from 'uuid';

import IconSliderButton from '@icons/components/IconSliderButton';

import { useMediaQuery } from '@hooks/index';
import { LAPTOP_BREAKPOINT } from '@utils/const';

import type { CSSProperties, ReactNode } from 'react';

import s from './CardSlider.module.scss';

interface CustomControlProps {
	previousSlide: () => void;
	nextSlide: () => void;
	currentSlide: number;
	slideCount: number;

	goToSlide(targetIndex: number): void;
}

const renderCenterLeftControls = ({ previousSlide }: CustomControlProps) => (
	<button className={cn(s.nav, s.prev)} onClick={previousSlide}>
		<IconSliderButton />
	</button>
);

const renderCenterRightControls = ({ nextSlide }: CustomControlProps) => {
	return (
		<button className={cn(s.nav, s.next)} onClick={nextSlide}>
			<IconSliderButton />
		</button>
	);
};

const renderBottomCenterControls = ({
	slideCount,
	currentSlide,
	goToSlide,
}: CustomControlProps) => {
	return (
		<ul className={s.dots}>
			{[...Array(slideCount)].map((e, key) => (
				<li
					className={cn(s.dot, currentSlide === key && s.active)}
					key={key}
					onClick={() => goToSlide(key)}
				/>
			))}
		</ul>
	);
};

const CardSlider: FC<{
	styles?: CSSProperties;
	children: ReactNode | ReactNode[];
	childrenClassName?: string;
	frameClassName?: string;
	withoutControls?: boolean;
	slidesToShow?: number;
	dragging?: boolean;
	autoplay?: boolean;
	adaptiveHeight?: boolean;
}> = ({
	children,
	childrenClassName,
	frameClassName,
	withoutControls = false,
	slidesToShow = 4,
	dragging = true,
	autoplay = true,
	adaptiveHeight = false,
	styles,
}) => {
	const isLaptop = useMediaQuery(LAPTOP_BREAKPOINT);
	const cellSpacing = isLaptop ? 10 : 20;

	const childrenRender = Children.map(children, (child) => {
		if (isValidElement(child)) {
			return cloneElement(child);
		}
		return child;
	});

	return (
		<Carousel
			style={styles}
			frameAriaLabel={uniqueId()}
			adaptiveHeight={adaptiveHeight}
			enableKeyboardControls={true}
			swiping
			className={cn(s.container, frameClassName)}
			withoutControls={withoutControls}
			slidesToScroll={1}
			slidesToShow={slidesToShow}
			cellSpacing={cellSpacing}
			dragThreshold={0.3}
			autoplay={autoplay}
			autoplayInterval={4000}
			disableEdgeSwiping
			dragging={dragging}
			wrapAround={true}
			renderCenterLeftControls={renderCenterLeftControls}
			renderCenterRightControls={renderCenterRightControls}
			renderBottomCenterControls={renderBottomCenterControls}
		>
			{childrenRender &&
				childrenRender.map((item) => (
					<div key={uniqueId()} className={cn(s.card, childrenClassName)}>
						{item}
					</div>
				))}
		</Carousel>
	);
};

export default CardSlider;
