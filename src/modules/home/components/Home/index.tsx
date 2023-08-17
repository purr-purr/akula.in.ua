import { useTranslation } from 'react-i18next';

import Feedback from '@modules/common/components/Feedback';
import Filter from '@modules/common/components/Filter';
import Meta from '@modules/common/components/Meta';

const Home = () => {
	const { t } = useTranslation('common');

	return (
		<>
			<Meta title="Home" desc="desc" keyWords={['keywords']} />
			<h1>{t('home')}</h1>
			<Filter />
			<Feedback />
		</>
	);
};

export default Home;
