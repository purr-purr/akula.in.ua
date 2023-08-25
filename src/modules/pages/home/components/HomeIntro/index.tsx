import { useTranslation } from 'react-i18next';
import Image from 'next/image';

import Loader from '@modules/common/components/Loader';
import FIRST_BUILDING from '@modules/pages/home/assets/HomeIntro/first-building.png';
import THIRD_BUILDING from '@modules/pages/home/assets/HomeIntro/second-building.png';
import SECOND_BUILDING from '@modules/pages/home/assets/HomeIntro/third-building.png';

import s from './HomeIntro.module.scss';

const HomeIntro = () => {
	const { t: tCommon } = useTranslation('common');
	const { t: tHome } = useTranslation('home');
	const buildingText = tCommon('BUILDING');

	const advantages = [
		{ text: tHome('INTRO.M_2_UNDER_THE_MANAGEMENT'), value: 96000 },
		{
			text: tHome('INTRO.OBJECTS_UNDER_THE_MANAGEMENT'),
			value: 240,
		},
		{ text: tHome('INTRO.TENANTS'), value: 730 },
	];

	return (
		<section className={s.container}>
			<article>
				<h1 className={s.title}>{tHome('INTRO.WE_WILL_FIND')}</h1>
				<p className={s.description}>{tHome('INTRO.YOUR_RELIABLE_ASSISTANT')}</p>
				<ul className={s.list}>
					{advantages.map((item) => (
						<li key={item.value}>
							<p className={s[`list-value`]}>
								{item.value}
								<span>+</span>
							</p>
							<p className={s[`list-text`]}>{item.text}</p>
						</li>
					))}
				</ul>
			</article>
			<article className={s.posters}>
				<Loader className={s.loader} />
				<Image className={s.first} src={FIRST_BUILDING} alt={buildingText} />
				<Image className={s.second} src={THIRD_BUILDING} alt={buildingText} />
				<Image className={s.third} src={SECOND_BUILDING} alt={buildingText} />
			</article>
		</section>
	);
};

export default HomeIntro;
