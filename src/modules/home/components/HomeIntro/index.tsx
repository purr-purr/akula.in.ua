import Image from 'next/image';

import FIRST_BUILDING from '@modules/home/assets/HomeIntro/first-building.png';
import THIRD_BUILDING from '@modules/home/assets/HomeIntro/second-building.png';
import SECOND_BUILDING from '@modules/home/assets/HomeIntro/third-building.png';

import s from './HomeIntro.module.scss';

const HomeIntro = () => {
	const advantages = [
		{ text: 'м2 в управлінні компанії', value: '96000' },
		{
			text: 'об’єктів в управлінні',
			value: '240',
		},
		{ text: 'задоволених орендарів', value: '730' },
	];

	return (
		<section className={s.container}>
			<article>
				<h1 className={s.title}>Знайдемо ідеальну нерухомість для вас</h1>
				<p className={s.description}>
					Akula Development Partner - ваш надійний помічник у світі нерухомості. Ми
					готові запропонувати вам найкращі рішення та довгострокову співпрацю,
					засновану на нашому професіоналізмі та компетенції.
				</p>
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
			<ul className={s.posters}>
				<li className={s.first}>
					<Image src={FIRST_BUILDING} alt={'s'} />
				</li>
				<li className={s.second}>
					<Image src={THIRD_BUILDING} alt={'s'} />
				</li>
				<li className={s.third}>
					<Image src={SECOND_BUILDING} alt={'s'} />
				</li>
			</ul>
		</section>
	);
};

export default HomeIntro;
