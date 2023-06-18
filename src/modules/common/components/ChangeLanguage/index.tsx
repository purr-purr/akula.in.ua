import React from 'react';
import Link from "next/link";
import {useRouter} from "next/router";
import {useTranslation} from "react-i18next";

type Language = {
	code: string
	translateKey: string
}

const languages: Language[] = [
	{code: 'default', translateKey: 'default'},
	{code: 'en', translateKey: 'english'},
	{code: 'ru', translateKey: 'ru'},
	{code: 'ua', translateKey: 'ukrainian'},
]

export default function ChangeLanguage() {
	const {t} = useTranslation('common');
	const router = useRouter();
	return (
		<>
			{languages.map((language) => language.code !== 'default' && (
				<Link
					href={router.pathname}
					locale={language.code}
					passHref
					key={language.code}
				>
					<button
						data-id={`${language.code}-button`}
						className={router.locale === language.code ? 'active' : undefined}
					>
						{t(language.translateKey)}
					</button>
				</Link>
			))}
		</>
	)
}