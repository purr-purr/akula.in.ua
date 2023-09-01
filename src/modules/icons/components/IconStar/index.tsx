import { FC } from 'react';

import type { IIconsProps } from '@modules/icons/types';

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
				d="M12.0715 0L13.8361 7.76531L20.6074 3.51472L16.3315 10.2459L24.1431 12L16.3315 13.7541L20.6074 20.4853L13.8361 16.2347L12.0715 24L10.307 16.2347L3.53567 20.4853L7.8116 13.7541L0 12L7.8116 10.2459L3.53567 3.51472L10.307 7.76531L12.0715 0Z"
				fill={color}
			/>
		</svg>
	);
};

export default IconStar;
