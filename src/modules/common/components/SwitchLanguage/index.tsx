import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';

import Dropdown from '@modules/common/components/Dropdown';

import type { DropdownOptions } from '@modules/common/types/dropdown';

import s from './SwitchLanguage.module.scss';

const SwitchLanguage = () => {
	const router = useRouter();
	const { i18n } = useTranslation();

	const languages = [
		{ value: 'ua', title: 'ua' },
		{ value: 'ru', title: 'ru' },
		{ value: 'en', title: 'en' },
	];

	const switchLanguage = (selectedLanguage: DropdownOptions) => {
		const { asPath } = router;

		try {
			i18n.changeLanguage(selectedLanguage.value).then();
			router.push(asPath, asPath, { locale: selectedLanguage.value }).then();
			localStorage.setItem('userLanguage', selectedLanguage.value);
		} catch (error) {
			console.error('Error while changing language:', error);
		}
	};

	const getCurrentSelectedLanguage = () => {
		const result = languages.filter((item) => item.value === i18n.language);
		return result[0];
	};

	return (
		<Dropdown
			handleOnChange={switchLanguage}
			options={languages}
			currentOption={getCurrentSelectedLanguage()}
			className={s.container}
		/>
	);
};
export default SwitchLanguage;
