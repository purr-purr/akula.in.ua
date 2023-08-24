import { FC } from 'react';

import CarouselSlider from '@modules/common/components/Slider';
import ServicesList from '@modules/services/components/ServicesList';

const Services: FC = () => {
	return (
		<>
			<ServicesList />

			<CarouselSlider />
		</>
	);
};
export default Services;
