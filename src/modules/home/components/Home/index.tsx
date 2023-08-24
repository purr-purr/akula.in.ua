import { useTranslation } from 'react-i18next';

import Feedback from '@modules/common/components/Feedback';
import Filter from '@modules/common/components/Filter';
import Meta from '@modules/common/components/Meta';
import HomeAdvantages from '@modules/home/components/HomeAdvantages';
import HomeIntro from '@modules/home/components/HomeIntro';
import HomePartners from '@modules/home/components/HomePartners';
import HomeTeam from '@modules/home/components/HomeTeam';
import HomeWhoWeAre from '@modules/home/components/HomeWhoWeAre';

const Home = () => {
	const { t } = useTranslation('common');
	return (
		<>
			<Meta title={t('NAVIGATION.MAIN')} desc="desc" keyWords={['keywords']} />
			<HomeIntro />
			<Filter />
			<HomeWhoWeAre />
			<HomeTeam />
			<HomePartners />
			<HomeAdvantages />
			<Feedback type="cooperation" />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<Feedback type="owner" />
		</>
	);
};

export default Home;
