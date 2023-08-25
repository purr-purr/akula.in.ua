import ServicesListItem from '@modules/pages/services/components/ServicesListItem';

import s from './ServicesList.module.scss';

const ServicesList = () => {
	return (
		<ul className={s.container}>
			<ServicesListItem />
		</ul>
	);
};

export default ServicesList;
