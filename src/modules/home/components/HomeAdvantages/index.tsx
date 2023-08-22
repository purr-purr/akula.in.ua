import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

import BlockTitle from '@modules/common/components/BlockTitle';

import s from './HomeAdvantages.module.scss';

const HomeAdvantages = () => {
	const { t } = useTranslation('home');
	const advantagesList = [
		'A_TEAM_OF_SPECIALISTS',
		'ORGANIZATION_AND_CONDUCT',
		'WE_ARE_READY_TO_PROVIDE',
		'SPECIALISTS_IN_THE_FIELD',
		'INDIVIDUAL_APPROACH',
		'IMPROVEMENT_OF_CONDITION',
		'SUPPORT_OF_QUALIFIED_SPECIALISTS',
		'LONG_TERM_PLANNING',
	];
	const advantagesList2 = [
		'a_team_of_specialists',
		'organization_and_conduct',
		'we_are_ready_to_provide',
		'specialists_in_the_field',
		'individual_approach',
		'improvement_of_condition',
		'support_of_qualified_specialists',
		'long_term_planning',
	];

	const getImagePath = (value: string) => {
		return require(`../../assets/HomeAdvantages/${value.toLowerCase()}.jpg`)
			.default;
	};

	return (
		<>
			<BlockTitle title={t('ADVANTAGES.ADVANTAGES_OF_THE_COMPANY')} />
			<ul className={s.container}>
				<li className={s.techSupport}>
					<p>{t('ADVANTAGES.TECHNICAL_CUSTOMER_SUPPORT')}</p>
					<span>24/7</span>
				</li>
				{advantagesList.map((item) => (
					<li key={item} className={s.item}>
						<Image src={getImagePath(item)} alt={''} />
						<p>{t(`ADVANTAGES.LIST_${item}`)}</p>
					</li>
				))}
			</ul>
		</>
	);
};

export default HomeAdvantages;
