import { FC } from 'react';

import type { IIconsProps } from '../../types';

const IconCross: FC<IIconsProps> = ({
	color = '#575757',
	width = 24,
	height = 24,
}) => {
	return (
		<svg
			className="svg-icon"
			width={width}
			height={height}
			viewBox={`0 0 ${width} ${height}`}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M8.46458 15.5355L15.5356 8.46448"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
			<path
				d="M8.46458 8.46445L15.5356 15.5355"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
		</svg>
	);
};

export default IconCross;
