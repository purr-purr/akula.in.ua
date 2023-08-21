import { FC, useEffect, useRef, useState } from 'react';
import cn from 'classnames';

import IconArrow from '@modules/icons/components/IconArrow';

import s from './Dropdown.module.scss';

const Dropdown: FC<{
	options: string[];
	disabledItem?: string;
	onClick?: (item: string) => void;
	customSelectedItem?: string;
	className?: string;
}> = ({ options, disabledItem, onClick, customSelectedItem, className }) => {
	const [isDropdown, setIsDropdown] = useState(false);
	const [selectedItem, setSelectedItem] = useState<string | undefined>(
		options[0],
	);

	const targetRef = useRef<HTMLDivElement | null>(null);

	const handleItemClick = (selectedItem: string) => {
		onClick && onClick(selectedItem);
		setSelectedItem(selectedItem);
	};

	const handleClickOutside = (event: MouseEvent) => {
		if (targetRef.current && !targetRef.current.contains(event.target as Node)) {
			setIsDropdown(false);
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	useEffect(() => {
		setIsDropdown(false);
	}, [selectedItem]);

	return (
		<div className={cn(s.container, className && className)} ref={targetRef}>
			<button
				onClick={() => setIsDropdown(!isDropdown)}
				className={cn(s.selected, isDropdown && s.active)}
			>
				{customSelectedItem || selectedItem}
				<IconArrow />
			</button>
			{isDropdown && (
				<ul className={s.list}>
					{options.map((item) => (
						<li
							className={cn(
								s[`list-item`],
								disabledItem === item && s.disabled,
								customSelectedItem || (selectedItem === item && s.current),
							)}
							key={item}
							onClick={() => handleItemClick(item)}
						>
							{item}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default Dropdown;
