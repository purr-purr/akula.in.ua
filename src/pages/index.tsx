import Feedback from '@modules/common/components/Feedback';
import Meta from '@modules/common/components/Meta';
import messages from '@utils/messages';
import {useTranslation} from 'react-i18next'
import ChangeLanguage from "@modules/common/components/ChangeLanguage";

const Home = () => {
	const {t, i18n} = useTranslation('common');
	// console.log(i18n)
	return (
		<>
			<Meta title={messages.JAVA_SCRIPT} desc="desc" keyWords={['keywords']}/>
			<h1>home page</h1>


			{t('h1')}
			<br/>
			current language is: {i18n.language}


			<Feedback/>

			<ChangeLanguage/>
		</>
	);
};

export default Home;
