import { ChangeEvent, useEffect, useState } from 'react';

import Meta from '@modules/common/components/Meta';

import messages from '@utils/messages';

const Home = () => {
	const initialData = { name: '', phone: '', text: '' };
	const [userData, setUserData] = useState(initialData);

	const handleSubmit = async (event: any) => {
		event.preventDefault();

		try {
			const response = await fetch('/api/send-email', {
				method: 'POST',
				body: JSON.stringify({ userData }),
				headers: { 'Content-Type': 'application/json' },
			});

			if (response.ok) {
				console.log('Email sent successfully');
				setUserData(initialData);
			} else {
				window.alert('Error');
			}
		} catch (error) {
			console.error(error);
		}
	};

	const getInputValue = (event: ChangeEvent<HTMLInputElement>) => {
		setUserData((prevState) => ({
			...prevState,
			[event.target.name]: event.target.value,
		}));
	};

	useEffect(() => {
		console.log(userData);
	}, [userData]);

	return (
		<>
			<Meta title={messages.JAVA_SCRIPT} desc="desc" keyWords={['keywords']} />
			<h1>home page</h1>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="name"
					placeholder="name"
					onChange={(e) => getInputValue(e)}
				/>

				<input
					type="text"
					name="phone"
					placeholder="phone"
					onChange={(e) => getInputValue(e)}
				/>

				<input
					type="text"
					name="text"
					placeholder="text"
					onChange={(e) => getInputValue(e)}
				/>

				<button type="submit" disabled={userData === initialData}>
					Submit
				</button>
			</form>
			<p>{userData.name}</p>
			<p>{userData.phone}</p>
			<p>{userData.text}</p>
		</>
	);
};

export default Home;
