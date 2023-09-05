import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';

import Dropdown from '@modules/common/components/Dropdown';

import s from './SwitchLanguage.module.scss';

export default function SwitchLanguage() {
	const router = useRouter();
	const { i18n } = useTranslation();

	const languages = [
		{ value: 'ua', title: 'ua' },
		{ value: 'ru', title: 'ru' },
		{ value: 'en', title: 'en' },
	];

	const switchLanguage = (selectedLanguage: string) => {
		const { asPath } = router;
		i18n.changeLanguage(selectedLanguage).then();
		router.push(asPath, asPath, { locale: selectedLanguage }).then();
		localStorage.setItem('userLanguage', selectedLanguage);
	};

	return (
		<Dropdown
			onClick={switchLanguage}
			options={languages}
			disabledItem={i18n.language}
			customSelectedItem={i18n.language}
			className={s.size}
		/>
	);
}
