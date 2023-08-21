import { useTranslation } from 'react-i18next';

import Feedback from '@modules/common/components/Feedback';
import Filter from '@modules/common/components/Filter';
import Meta from '@modules/common/components/Meta';
import HomeIntro from '@modules/home/components/HomeIntro';

const Home = () => {
	const { t } = useTranslation('common');
	return (
		<>
			<Meta title={t('navigation.main')} desc="desc" keyWords={['keywords']} />
			<HomeIntro />
			<br />
			<Filter />
			<br />
			<Feedback />
		</>
	);
};

export default Home;
