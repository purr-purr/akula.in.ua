import { Trans, useTranslation } from 'react-i18next';
import Image from 'next/image';

import BlockTitle from '@modules/common/components/BlockTitle';
import IconStar from '@icons/components/IconStar';

import TEAM from './assets/team-poster.jpg';

import s from './HomeTeam.module.scss';

const HomeTeam = () => {
	const { t } = useTranslation('home');
	const teamDescription = [
		'TEAM.CONTINUOUS_DEVELOPMENT',
		'TEAM.LONG_TERM_PLANNING',
		'TEAM.QUALITY_AND_REPUTATION',
	];

	return (
		<section className={s.container}>
			<div className={s.poster}>
				<Image src={TEAM} alt={t('TEAM.A_TEAM_OF_PROFESSIONALS')} />
			</div>

			<article className={s.info}>
				<BlockTitle title={t('TEAM.A_TEAM_OF_PROFESSIONALS')} />

				<p>
					<Trans t={t} i18nKey="TEAM.AKULA_TEAM_IS">
						<b />
					</Trans>
				</p>

				<ul className={s.list}>
					{teamDescription.map((item) => (
						<li key={item}>
							<IconStar />
							<p>
								<Trans t={t} i18nKey={item}>
									<strong />
								</Trans>
							</p>
						</li>
					))}
				</ul>
			</article>
		</section>
	);
};

export default HomeTeam;
