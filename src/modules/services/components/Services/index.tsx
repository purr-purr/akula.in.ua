import { FC } from 'react';

import Feedback from '@modules/common/components/Feedback';
import ServicesList from '@modules/services/components/ServicesList';

const Services: FC = () => {
	return (
		<>
			<h1>Services page</h1>
			<ServicesList />
			<br />
			<br />
			<br />
			<Feedback />
		</>
	);
};
export default Services;
