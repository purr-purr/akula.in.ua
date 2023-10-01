import { FC } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import cn from 'classnames';

import { useCurrencyFetching } from '@hooks/index';

import s from './CatalogPageNotice.module.scss';

const CatalogPageNotice: FC<{
	type?: 'short' | 'full';
}> = ({ type = 'full' }) => {
	const { t } = useTranslation('catalog');
	const { currencyRate, currencyDate } = useCurrencyFetching();

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
						date: currencyDate,
						uah: currencyRate,
					}}
					components={{
						Link: (
							<a
								className="link"
								href="https://www.eximb.com/ua/business/pryvatnym-klientam/pryvatnym-klientam-inshi-poslugy/obmin-valyut/kursy-valyut.html"
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
