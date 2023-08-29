import { FC } from 'react';

import type { IIconsProps } from '@modules/icons/types';

const IconSliderButton: FC<IIconsProps> = ({
	color = '#8FBDC2',
	width = 40,
	height = 40,
}) => {
	return (
		<svg
			className="svg-slider-button"
			width={width}
			height={height}
			viewBox={`0 0 ${width} ${height}`}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g filter="url(#filter0_b_27_737)">
				<circle cx="20" cy="20" r="20" fill="#fff" fillOpacity="0.9" />
				<circle cx="20" cy="20" r="19.5" stroke={color} />
			</g>
			<path
				d="M19.0303 16.5303C19.3232 16.2374 19.3232 15.7626 19.0303 15.4697C18.7374 15.1768 18.2626 15.1768 17.9697 15.4697L13.9697 19.4697C13.8232 19.6161 13.75 19.8081 13.75 20C13.75 20.1017 13.7702 20.1987 13.8069 20.2871C13.8435 20.3755 13.8978 20.4584 13.9697 20.5303L17.9697 24.5303C18.2626 24.8232 18.7374 24.8232 19.0303 24.5303C19.3232 24.2374 19.3232 23.7626 19.0303 23.4697L16.3107 20.75H26C26.4142 20.75 26.75 20.4142 26.75 20C26.75 19.5858 26.4142 19.25 26 19.25H16.3107L19.0303 16.5303Z"
				fill={color}
			/>
			<defs>
				<filter
					id="filter0_b_27_737"
					x="-11"
					y="-11"
					width="62"
					height="62"
					filterUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB"
				>
					<feFlood floodOpacity="0" result="BackgroundImageFix" />
					<feGaussianBlur in="BackgroundImageFix" stdDeviation="5.5" />
					<feComposite
						in2="SourceAlpha"
						operator="in"
						result="effect1_backgroundBlur_27_737"
					/>
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="effect1_backgroundBlur_27_737"
						result="shape"
					/>
				</filter>
			</defs>
		</svg>
	);
};

export default IconSliderButton;
