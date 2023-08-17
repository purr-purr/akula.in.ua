import Image from 'next/image';
import Link from 'next/link';

import Button from '@modules/common/components/Button';
import SelectChangeLanguage from '@modules/common/components/SwitchLanguage';

import s from './NavContacts.module.scss';
import MAP from '/public/assets/map-icon.svg';
import PHONE from '/public/assets/phone-icon.svg';

const NavContacts = () => {
	const contactsList = [
		{
			url: '1',
			icon: PHONE,
		},
		{
			url: '2',
			icon: MAP,
		},
	];
	return (
		<article className={s.container}>
			{contactsList.map((item) => (
				<Link className={s.icon} key={item.url} href={'/'}>
					<Image src={item.icon} alt="ALT" />
				</Link>
			))}

			<SelectChangeLanguage />

			<Button type="link" color="transparent" text="Знайти нерухомість" />
			<Button text="Залишити заявку" />
		</article>
	);
};

export default NavContacts;
