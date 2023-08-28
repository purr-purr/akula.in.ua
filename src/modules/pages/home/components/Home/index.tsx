import { useTranslation } from 'react-i18next';

import Feedback from '@modules/common/components/Feedback';
import Filter from '@modules/common/components/Filter';
import Meta from '@modules/common/components/Meta';
import HomeAdvantages from '@modules/pages/home/components/HomeAdvantages';
import HomeIntro from '@modules/pages/home/components/HomeIntro';
import HomeObjectsInManagement from '@modules/pages/home/components/HomeObjectsInManagement';
import HomePartners from '@modules/pages/home/components/HomePartners';
import HomeReviews from '@modules/pages/home/components/HomeReviews';
import HomeTeam from '@modules/pages/home/components/HomeTeam';
import HomeWhoWeAre from '@modules/pages/home/components/HomeWhoWeAre';

const Home = () => {
	const { t } = useTranslation('common');
	return (
		<>
			<Meta title={t('NAVIGATION.MAIN')} desc="desc" keyWords={['keywords']} />
			<HomeIntro />
			<Filter />
			<HomeWhoWeAre />
			<HomeTeam />
			<HomeAdvantages />
			<Feedback type="cooperation" />
			<HomeObjectsInManagement />
			<HomePartners />
			<HomeReviews />
			<Feedback type="owner" />
		</>
	);
};

export default Home;
