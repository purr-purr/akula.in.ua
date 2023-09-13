import { FC } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import cn from 'classnames';

import { CURRENCY } from '@utils/data';

import s from './CatalogPageNotice.module.scss';

const CatalogPageNotice: FC<{
	type?: 'short' | 'full';
}> = ({ type = 'full' }) => {
	const { t } = useTranslation('catalog');
	return (
		<p className={cn(s.container, type === 'full' && s[`container--full`])}>
			<span className="star">*</span>
			{type === 'short' ? (
				t('ACCORDING_TO_THE_REQUIREMENTS')
			) : (
				<Trans
					t={t}
					i18nKey="REQUIREMENTS_OF_THE_LAW_OF_UKRAINE"
					useDangerouslySetInnerHTML
					values={{
						date: CURRENCY.DATE,
						uah: CURRENCY.UAH,
					}}
					components={{
						Link: (
							<a
								className="link"
								href="https://www.eximb.com/"
								target="_blank"
								rel="noreferrer"
							/>
						),
					}}
				/>
			)}
		</p>
	);
};

export default CatalogPageNotice;
