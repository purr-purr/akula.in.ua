import { useTranslation } from 'react-i18next';
import Image from 'next/image';

import FIRST_BUILDING from '@modules/home/assets/HomeIntro/first-building.png';
import THIRD_BUILDING from '@modules/home/assets/HomeIntro/second-building.png';
import SECOND_BUILDING from '@modules/home/assets/HomeIntro/third-building.png';
import Loader from '@modules/layout/components/Loader';

import s from './HomeIntro.module.scss';

const HomeIntro = () => {
	const { t: tCommon } = useTranslation('common');
	const { t: tHome } = useTranslation('home');
	const buildingText = tCommon('building');

	const advantages = [
		{ text: tHome('intro.m2-under-the-management'), value: 96000 },
		{
			text: tHome('intro.objects-under-the-management'),
			value: 240,
		},
		{ text: tHome('intro.tenants'), value: 730 },
	];

	return (
		<section className={s.container}>
			<article>
				<h1 className={s.title}>{tHome('intro.we-will-find')}</h1>
				<p className={s.description}>{tHome('intro.your-reliable-assistant')}</p>
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
