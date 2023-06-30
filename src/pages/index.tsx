import { useTranslation } from 'react-i18next';

import Feedback from '@modules/common/components/Feedback';
import Meta from '@modules/common/components/Meta';

import messages from '@utils/messages';

const Home = () => {
	const { t, i18n } = useTranslation('common');
	return (
		<>
			<Meta title={messages.JAVA_SCRIPT} desc="desc" keyWords={['keywords']} />
			<h1>home page</h1>
			{t('h1')}
			<br />
			current language is: {i18n.language}
			<Feedback />
		</>
	);
};

export default Home;
