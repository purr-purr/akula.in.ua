import Link from 'next/link';

import s from './NavContacts.module.scss';

const NavContacts = () => {
	return (
		<div className={s.container}>
			<Link href={''}>icon 1</Link>
			<Link href={''}>icon 2</Link>
			<button>Знайти нерухомість</button>
			<button>Залишити заявку</button>
		</div>
	);
};

export default NavContacts;
