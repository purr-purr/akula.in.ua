import cn from 'classnames';

import s from './Footer.module.scss';

const Footer = () => {
	return (
		<footer className={s.container}>
			<section className={cn('layout-container', s.inner)}>footer</section>
		</footer>
	);
};

export default Footer;
