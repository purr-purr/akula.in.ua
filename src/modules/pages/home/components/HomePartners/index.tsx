import Image from 'next/image';

import POSTER from '../../assets/HomePartners/1.png';
import s from './HomePartners.module.scss';

const Partners = () => {
	const partnersList = [POSTER, POSTER, POSTER, POSTER];

	return (
		<ul className={s.container}>
			{partnersList.map((item, i) => (
				<li key={i}>
					<Image src={item} alt={''} />
				</li>
			))}
		</ul>
	);
};

export default Partners;
