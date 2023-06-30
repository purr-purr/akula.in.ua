import type { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';

import s from './SwitchLanguage.module.scss';

interface ILanguage {
	code: string;
	translateKey: string;
}

export default function SwitchLanguage() {
	const router = useRouter();
	const { i18n } = useTranslation();

	const languages: ILanguage[] = [
		{ code: 'en', translateKey: 'English' },
		{ code: 'ru', translateKey: 'Russian' },
		{ code: 'ua', translateKey: 'Ukrainian' },
	];

	const switchLanguage = (event: ChangeEvent<HTMLSelectElement>) => {
		const { asPath } = router;
		const selectedLanguage = event.target.value;
		i18n.changeLanguage(selectedLanguage).then();
		router.push(asPath, asPath, { locale: selectedLanguage }).then();
		localStorage.setItem('userLanguage', selectedLanguage);
	};

	return (
		<>
			<select
				className={s.container}
				onChange={switchLanguage}
				value={i18n.language}
			>
				{languages.map((item) => (
					<option
						disabled={i18n.language === item.code}
						key={item.code}
						value={item.code}
					>
						{item.translateKey}
					</option>
				))}
			</select>
		</>
	);
}
