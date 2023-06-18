// import useTranslation from 'next-translate';
import { useTranslation } from 'next-i18next';
import setLanguage from 'next-translate/setLanguage';

function LanguageSelector() {
	const { i18n } = useTranslation();
	// const [selectedLanguage, setSelectedLanguage] = useState<string>(
	// 	i18n.language,
	// );
	//
	// const changeLanguage = (e: ChangeEvent<HTMLSelectElement>) => {
	// 	const language = e.target.value;
	// 	setSelectedLanguage(language);
	// 	i18n.changeLanguage(language).then();
	// };

	return (
		<>
			<button onClick={async () => await setLanguage('en')}>EN</button>
			<button onClick={async () => await setLanguage('ua')}>UA</button>
		</>
		// <select onChange={changeLanguage} value={selectedLanguage}>
		// 	<option value="ua">Українська</option>
		// 	<option value="ru">Русский</option>
		// 	<option value="en">English</option>
		// </select>
	);
}

export default LanguageSelector;
