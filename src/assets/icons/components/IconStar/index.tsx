import { FC } from 'react';

import type { IIconsProps } from '../../types';

const IconStar: FC<IIconsProps> = ({
	color = '#FFA700',
	width = 25,
	height = 24,
}) => {
	return (
		<svg
			width={width}
			height={height}
			style={{ minWidth: `${width}px` }}
			viewBox={`0 0 ${width} ${height}`}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d={
					width === 16
						? 'M8 0L9.16938 5.17688L13.6569 2.34315L10.8231' +
						  ' 6.83062L16 8L10.8231 9.16938L13.6569 13.6569L9.16938 10.8231L8' +
						  ' 16L6.83062 10.8231L2.34315 13.6569L5.17688 9.16938L0 8L5.17688' +
						  ' 6.83062L2.34315 2.34315L6.83062 5.17688L8 0Z'
						: 'M12.0715 0L13.8361 7.76531L20.6074 3.51472L16.3315 10.2459L24.1431 12L16.3315 13.7541L20.6074 20.4853L13.8361 16.2347L12.0715 24L10.307 16.2347L3.53567 20.4853L7.8116 13.7541L0 12L7.8116 10.2459L3.53567 3.51472L10.307 7.76531L12.0715 0Z'
				}
				fill={color}
			/>
		</svg>
	);
};

export default IconStar;
