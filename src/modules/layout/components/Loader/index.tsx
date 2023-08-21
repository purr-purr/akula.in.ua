import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import cn from 'classnames';

import LOADER from '@public/assets/loader.svg';

import s from './Loader.module.scss';

const Loader: FC<{
	type?: 'short' | 'full';
	className?: string;
}> = ({ type = 'short', className }) => {
	const { t } = useTranslation('common');
	const loadingText = t('loading');

	return (
		<div className={cn(s.container, className && className)}>
			<Image src={LOADER} alt={loadingText} />
			{type === 'full' && <p>{loadingText}</p>}
		</div>
	);
};

export default Loader;
