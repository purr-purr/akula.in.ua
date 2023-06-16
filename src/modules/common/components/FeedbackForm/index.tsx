import { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react';

import { TG_BOT_TOKEN, TG_CHAT_ID } from '@utils/const';

const FeedbackForm: FC<{ messageText?: string }> = ({ messageText = '' }) => {
	const initFormData = {
		name: '',
		email: '',
		message: messageText,
	};
	const [formData, setFormData] = useState(initFormData);

	useEffect(() => {
		if (messageText !== formData.message) {
			setFormData({ ...formData, message: messageText });
		}
	}, [messageText]);

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const { name, email, message } = formData;
		const messageText = `
			Name: ${name}\nEmail: ${email}\nMessage: ${message}
		`;

		try {
			await fetch(`https://api.telegram.org/bot${TG_BOT_TOKEN}/sendMessage`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					chat_id: TG_CHAT_ID,
					text: messageText,
				}),
			});
			setFormData(initFormData);
			console.log('Message sent successfully!');
		} catch (error) {
			window.alert('Failed to send message.');
			console.log(error);
		}
	};

	const handleChange = (
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		setFormData({ ...formData, [event.target.name]: event.target.value });
	};

	return (
		<form onSubmit={handleSubmit}>
			<label>
				<input
					type="text"
					name="name"
					placeholder="name"
					value={formData.name}
					onChange={handleChange}
				/>
			</label>
			<label>
				<input
					type="email"
					name="email"
					placeholder="email"
					value={formData.email}
					onChange={handleChange}
				/>
			</label>
			<label>
				<textarea
					name="message"
					placeholder="message"
					value={formData.message}
					onChange={handleChange}
				/>
			</label>

			<button type="submit">Submit</button>
		</form>
	);
};

export default FeedbackForm;
