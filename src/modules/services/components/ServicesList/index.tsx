import ServicesListItem from '@modules/services/components/ServicesListItem';

import s from './ServicesList.module.scss';

const ServicesList = () => {
	return (
		<ul className={s.container}>
			<ServicesListItem />
		</ul>
	);
};

export default ServicesList;
