import { Trans, useTranslation } from 'react-i18next';

import Button from '@modules/common/components/Button';
import Loader from '@modules/common/components/Loader';

import { CATALOG_NAME } from '@utils/const';

import s from './Page404.module.scss';

const Page404 = () => {
	const { t } = useTranslation('common');

	return (
		<article className={s.container}>
			<div className={s.code}>
				<span>4</span>
				<Loader />
				<span>4</span>
			</div>
			<Trans t={t} i18nKey="PAGE_NOT_FOUND">
				<p />
			</Trans>
			<div className={s.nav}>
				<Button text={t('NAVIGATION.MAIN_PAGE')} type="link" linkPath="/" />
				<Button
					text={t('FIND_REAL_ESTATE')}
					color="transparent"
					type="link"
					linkPath={`/${CATALOG_NAME}`}
				/>
			</div>
		</article>
	);
};
export default Page404;
