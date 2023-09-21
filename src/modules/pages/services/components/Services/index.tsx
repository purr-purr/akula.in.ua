import { FC } from 'react';
import { Trans, useTranslation } from 'react-i18next';

import BlockTitle from '@modules/common/components/BlockTitle';
import Meta from '@modules/common/components/Meta';
import Feedback from '@modules/feedback/components/Feedback';
import ServicesList from '@modules/pages/services/components/ServicesList';
import IconStar from '@icons/components/IconStar';

import { useMediaQuery } from '@hooks/index';
import { TABLET_BREAKPOINT } from '@utils/const';

import s from './Services.module.scss';

const Services: FC = () => {
	const { t: tServices } = useTranslation('services');
	const { t: tCommon } = useTranslation('common');
	const isTablet = useMediaQuery(TABLET_BREAKPOINT);
	const pageDescription = [
		'AKULA_TEAM',
		'WE_ARE_CONSTANTLY_EXPANDING',
		'WE_ARE_A_SPECIALIZED_COMPANY',
	];
	const starSize = isTablet ? 16 : 25;

	return (
		<>
			<Meta title={tCommon('NAVIGATION.SERVICES')} />
			<BlockTitle className={s.title} title={tServices('COMPANY_SERVICES')} />
			<ul className={s.container}>
				{pageDescription.map((item) => (
					<li key={item}>
						<IconStar width={starSize} />
						<p>
							<Trans t={tServices} i18nKey={item}>
								<b />
							</Trans>
						</p>
					</li>
				))}
			</ul>
			<ServicesList />
			<Feedback type="cooperation" />
		</>
	);
};
export default Services;
