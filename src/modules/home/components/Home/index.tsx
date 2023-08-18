import Feedback from '@modules/common/components/Feedback';
import Filter from '@modules/common/components/Filter';
import Meta from '@modules/common/components/Meta';
import HomeIntro from '@modules/home/components/HomeIntro';

import { APP_TITLE } from '@utils/const';

const Home = () => {
	return (
		<>
			<Meta title={APP_TITLE} desc="desc" keyWords={['keywords']} />
			<HomeIntro />
			<Filter />
			<Feedback />
		</>
	);
};

export default Home;
