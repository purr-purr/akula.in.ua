import {useTranslation} from 'react-i18next';

import Feedback from '@modules/common/components/Feedback';
import Meta from '@modules/common/components/Meta';

const Home = () => {
	const {t, i18n} = useTranslation('common');
	return (
		<>
			<Meta title="Home" desc="desc" keyWords={['keywords']}/>
			<h1>{t('home')}</h1>
			<br/>
			current language is: {i18n.language}
			<Feedback/>
		</>
	);
};

export default Home;
