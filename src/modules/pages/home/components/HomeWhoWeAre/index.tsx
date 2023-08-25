import { Trans, useTranslation } from 'react-i18next';
import cn from 'classnames';

import s from './HomeWhoWeAre.module.scss';

const HomeWhoWeAre = () => {
	const { t } = useTranslation('home');
	return (
		<section className={cn(s.container, 'nude-bg')}>
			<article className={s.inner}>
				<p className={s.desc}>
					<Trans t={t} i18nKey="WHO_WE_ARE.ABOUT_US">
						<strong />
					</Trans>
				</p>
			</article>
		</section>
	);
};

export default HomeWhoWeAre;
