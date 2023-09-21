import { FC } from 'react';

import type { IIconsProps } from '../../types';

const IconArrow: FC<IIconsProps> = ({
	color = '#575757',
	width = 10,
	height = 7,
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
				fillRule="evenodd"
				clipRule="evenodd"
				d="M9.28033 0.96967C9.57322 1.26256 9.57322 1.73744 9.28033 2.03033L5.28033 6.03033C4.98744 6.32322 4.51256 6.32322 4.21967 6.03033L0.21967 2.03033C-0.0732233 1.73744 -0.0732233 1.26256 0.21967 0.96967C0.512563 0.676777 0.987437 0.676777 1.28033 0.96967L4.75 4.43934L8.21967 0.96967C8.51256 0.676777 8.98744 0.676777 9.28033 0.96967Z"
				fill={color}
			/>
		</svg>
	);
};

export default IconArrow;
