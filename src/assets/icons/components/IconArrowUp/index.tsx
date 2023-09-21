import { FC } from 'react';

import type { IIconsProps } from '../../types';

const IconArrowUp: FC<IIconsProps> = ({
	color = '#FFA700',
	width = 24,
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
				d="M9.6 6.99807C8.97516 6.99807 8.46863 6.49154 8.46863 5.8667C8.46863 5.24186 8.97516 4.73533 9.6 4.73533L18.1333 4.73533C18.7582 4.73533 19.2647 5.24186 19.2647 5.8667L19.2647 14.4C19.2647 15.0249 18.7582 15.5314 18.1333 15.5314C17.5085 15.5314 17.002 15.0249 17.002 14.4L17.002 8.59807L6.66667 18.9334C6.22484 19.3752 5.50849 19.3752 5.06667 18.9334C4.62484 18.4915 4.62484 17.7752 5.06667 17.3334L15.402 6.99807H9.6Z"
				fill={color}
			/>
		</svg>
	);
};

export default IconArrowUp;
