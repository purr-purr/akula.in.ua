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
	const { t: tCommon } = useTranslation('common');
	const { t: tCatalog } = useTranslation('catalog');
	const { basePath, asPath } = useRouter();
	const fullLink = `https://akula.in.ua${basePath + asPath}`;
	const messageText = message ? message : 'Без повідомлення';

	const initFormData = {
		name: '',
		phone: '',
		message: messageText,
	};

	const [formData, setFormData] = useState(initFormData);

	useEffect(() => {
		if (messageText !== formData.message) {
			setFormData({
				...formData,
				message: tCatalog('HELLO_I_AM_INTERESTED') + ' ' + messageText,
			});
		}
	}, [messageText, tCatalog]);

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const botTemplate = `Name: ${formData.name}Phone: ${formData.phone}Message: ${formData.message}Order from: ${fullLink}`;

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
			<InputField label={tCommon('FIRSTNAME_LASTNAME')} color="dark">
				<input
					type="text"
					name="name"
					placeholder={tCommon('FIRSTNAME_LASTNAME')}
					value={formData.name}
					onChange={handleChange}
				/>
			</InputField>

			<InputField label={tCommon('PHONE_NUMBER')} color="dark">
				<input
					type="tel"
					name="phone"
					placeholder="+380 __-__-__-___"
					value={formData.phone}
					onChange={handleChange}
				/>
			</InputField>

			{message && (
				<textarea
					spellCheck="false"
					name="message"
					value={formData.message}
					onChange={handleChange}
				/>
			)}
			<Button isDisabled={isDisabledButton} text={tCommon('LEAVE_A_REQUEST')} />
		</form>
	);
};

export default FeedbackForm;
