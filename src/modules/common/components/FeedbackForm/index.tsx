import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import cn from 'classnames';

import Button from '@modules/common/components/Button';
import InputField from '@modules/common/components/InputField';

import { TG_BOT } from '@utils/const';

import type { ChangeEvent, FormEvent } from 'react';

import s from './FeedbackForm.module.scss';

const FeedbackForm: FC<{ message?: string; isColumnType?: boolean }> = ({
	message,
	isColumnType = false,
}) => {
	const { t } = useTranslation('common');
	const { basePath, asPath } = useRouter();
	const fullLink = `https://akula.in.ua${basePath + asPath}`;
	const messageText = message ? message : 'Заявка з головної сторінки';

	const initFormData = {
		name: '',
		phone: '',
		message: messageText,
	};

	const [formData, setFormData] = useState(initFormData);

	useEffect(() => {
		if (messageText !== formData.message) {
			setFormData({ ...formData, message: t('street') + ' ' + messageText });
		}
	}, [messageText, t]);

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const botTemplate = `Name: ${formData.name}\nPhone: ${formData.phone}\nMessage: ${formData.message}\nOrder from: ${fullLink}`;

		for (const chatID of TG_BOT.CHAT_ID_LIST) {
			try {
				await fetch(`https://api.telegram.org/bot${TG_BOT.TOKEN}/sendMessage`, {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({
						chat_id: chatID,
						text: botTemplate,
					}),
				});
				setFormData(initFormData);
				console.log('Message sent successfully!');
			} catch (error) {
				window.alert('Failed to send message.');
				console.log(error);
			}
		}
	};

	const handleChange = (
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		setFormData({ ...formData, [event.target.name]: event.target.value });
	};

	const isDisabledButton = formData.phone.length < 1 || formData.name.length < 1;

	return (
		<form
			className={cn(s.container, isColumnType && s.column)}
			onSubmit={handleSubmit}
		>
			<InputField label="Name" color="dark">
				<input
					type="text"
					name="name"
					placeholder="Name"
					value={formData.name}
					onChange={handleChange}
				/>
			</InputField>

			<InputField label="Phone" color="dark">
				<input
					type="tel"
					name="phone"
					placeholder="Phone"
					value={formData.phone}
					onChange={handleChange}
				/>
			</InputField>

			{message && (
				<InputField label="Message">
					<textarea
						name="message"
						placeholder="message"
						value={formData.message}
						onChange={handleChange}
					/>
				</InputField>
			)}
			<Button isDisabled={isDisabledButton} text={t('LEAVE_A_REQUEST')} />
		</form>
	);
};

export default FeedbackForm;
