import { FC } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import Image from 'next/image';
import cn from 'classnames';

import IconArrowUp from '@icons/components/IconArrowUp';

import { useMediaQuery } from '@hooks/index';
import { TABLET_BREAKPOINT } from '@utils/const';

import s from './ServicesListItem.module.scss';

const ServicesListItem: FC<{ text: string; isEvenElement?: boolean }> = ({
	text,
	isEvenElement,
}) => {
	const { t } = useTranslation('services');
	const isTablet = useMediaQuery(TABLET_BREAKPOINT);

	const getImagePath = (value: string) => {
		try {
			return require(`@modules/pages/services/components/ServicesListItem/assets/${value}.jpg`)
				.default;
		} catch {
			const condition = value.endsWith('--preview') ? '--short' : '';
			return require(`@public/assets/default-image${condition}.jpg`).default;
		}
	};

	return (
		<details className={cn(s.container, isEvenElement && s.even)}>
			<summary className={s.heading}>
				<div className={s.headingInner}>
					<h3>
						{t(`SERVICES_LIST.SUBLIST.${text}.TITLE`)}
						<IconArrowUp />
					</h3>

					{!isTablet && (
						<Image
							className={s.headingPoster}
							src={getImagePath(`${text}--preview`)}
							alt="Preview"
						/>
					)}
				</div>
			</summary>
			<ul className={s.content}>
				<Trans t={t} i18nKey={`SERVICES_LIST.SUBLIST.${text}.DESC`}>
					<li />
				</Trans>
			</ul>
			<Image className={s.poster} src={getImagePath(text)} alt="Poster" />
		</details>
	);
};

export default ServicesListItem;
