import { FC } from 'react';

import ServicesList from '@modules/services/components/ServicesList';

const Services: FC = () => {
	return (
		<>
			<h1>Services page</h1>
			<ServicesList />
		</>
	);
};
export default Services;
