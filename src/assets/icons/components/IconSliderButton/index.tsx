import { FC } from 'react';

import { useMediaQuery } from '@hooks/index';
import { LAPTOP_BREAKPOINT } from '@utils/const';

import type { IIconsProps } from '../../types';

const IconSliderButton: FC<IIconsProps> = ({ color = '#8FBDC2' }) => {
	const isLaptop = useMediaQuery(LAPTOP_BREAKPOINT);
	const size = isLaptop ? 34 : 40;

	return (
		<svg
			className="svg-slider-button"
			width={size}
			height={size}
			viewBox={`0 0 ${size} ${size}`}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			{isLaptop ? (
				<>
					<g filter="url(#filter0_b_323_3838)">
						<circle cx="17" cy="17" r="17" fill="#fff" fillOpacity="0.9" />
						<circle cx="17" cy="17" r="16.5" stroke={color} />
					</g>
					<path
						d="M22.1001 17.75C22.5143 17.75 22.8501 17.4142 22.8501 17C22.8501 16.5858 22.5143 16.25 22.1001 16.25L22.1001 17.75ZM11.3698 16.4697C11.0769 16.7626 11.0769 17.2374 11.3698 17.5303L16.1427 22.3033C16.4356 22.5962 16.9105 22.5962 17.2034 22.3033C17.4963 22.0104 17.4963 21.5355 17.2034 21.2426L12.9608 17L17.2034 12.7574C17.4963 12.4645 17.4963 11.9896 17.2034 11.6967C16.9105 11.4038 16.4356 11.4038 16.1427 11.6967L11.3698 16.4697ZM22.1001 16.25L11.9001 16.25L11.9001 17.75L22.1001 17.75L22.1001 16.25Z"
						fill={color}
					/>
					<defs>
						<filter
							id="filter0_b_323_3838"
							x="-11"
							y="-11"
							width="56"
							height="56"
							filterUnits="userSpaceOnUse"
							colorInterpolationFilters="sRGB"
						>
							<feFlood floodOpacity="0" result="BackgroundImageFix" />
							<feGaussianBlur in="BackgroundImageFix" stdDeviation="5.5" />
							<feComposite
								in2="SourceAlpha"
								operator="in"
								result="effect1_backgroundBlur_323_3838"
							/>
							<feBlend
								mode="normal"
								in="SourceGraphic"
								in2="effect1_backgroundBlur_323_3838"
								result="shape"
							/>
						</filter>
					</defs>
				</>
			) : (
				<>
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
				</>
			)}
		</svg>
	);
};

export default IconSliderButton;
