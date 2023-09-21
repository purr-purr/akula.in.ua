import { FC } from 'react';
import cn from 'classnames';

import IconGrayLogo from '@icons/components/IconGrayLogo';

import s from './DefaultPoster.module.scss';

const DefaultPoster: FC<{ className?: string }> = ({ className }) => {
	return (
		<div className={cn(s.container, className)}>
			<IconGrayLogo />
		</div>
	);
};

export default DefaultPoster;
