import Image from 'next/image';
import Link from 'next/link';

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
				<Link key={item.url} href={''}>
					<Image src={item.icon} alt="ALT" />
				</Link>
			))}

			<button>Знайти нерухомість</button>
			<button>Залишити заявку</button>
		</article>
	);
};

export default NavContacts;
