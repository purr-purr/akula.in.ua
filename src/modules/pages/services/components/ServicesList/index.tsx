import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import BlockTitle from '@modules/common/components/BlockTitle';
import ServicesListItem from '@modules/pages/services/components/ServicesListItem';

import s from './ServicesList.module.scss';

const ServicesList = () => {
	const { t } = useTranslation('services');
	const SERVICES_LIST = [
		{
			title: 'STRATEGIC_SUPPORT_AND_DEVELOPMENT',
			list: [
				'SERVICES_FOR_DEVELOPERS_INVESTORS',
				'SERVICES_FOR_OWNERS',
				'SERVICES_FOR_BUSINESS',
			],
		},
		{
			title: 'CONSULTING_SUPPORT',
			list: [
				'COMMERCIAL_MANAGEMENT',
				'BROKERAGE',
				'CONSULTING',
				'TECHNICAL_CONSULTING',
			],
		},
		{
			title: 'MAINTENANCE_AND_UPGRADE',
			list: [
				'BEFORE_COMMISSIONING',
				'NETWORK_MAINTENANCE',
				'RENOVATION_OF_OBJECTS',
			],
		},
		{
			title: 'COMFORT_AND_SAFETY_OF_OBJECTS',
			list: ['SECURITY', 'CLEANING', 'RECEPTIONIST'],
		},
	];

	return (
		<>
			{SERVICES_LIST.map((item, index) => (
				<Fragment key={item.title}>
					<BlockTitle
						className={cn(index !== 0 && s.blockTitle)}
						title={t(`SERVICES_LIST.${item.title}`)}
					/>

					{item.list.map((subItem) => (
						<ServicesListItem
							isEvenElement={index % 2 !== 0}
							key={subItem}
							text={subItem}
						/>
					))}
				</Fragment>
			))}
		</>
	);
};

export default ServicesList;
