import Feedback from '@modules/common/components/Feedback';
import Meta from '@modules/common/components/Meta';

import messages from '@utils/messages';

const Home = () => {
	return (
		<>
			<Meta title={messages.JAVA_SCRIPT} desc="desc" keyWords={['keywords']} />
			<h1>home page</h1>
			<Feedback />
		</>
	);
};

export default Home;
