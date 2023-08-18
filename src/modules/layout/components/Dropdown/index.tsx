import { FC, useEffect, useRef, useState } from 'react';
import cn from 'classnames';

import IconArrow from '@modules/icons/components/IconArrow';

import s from './Dropdown.module.scss';

const Dropdown: FC<{
	options: string[];
	disabledItem?: string;
	onClick?: (item: string) => void;
	customSelectedItem?: string;
}> = ({ options, disabledItem, onClick, customSelectedItem }) => {
	const [isDropdown, setIsDropdown] = useState(false);
	const [selectedItem, setSelectedItem] = useState<string | undefined>(
		options[0],
	);

	const handleItemClick = (selectedItem: string) => {
		setSelectedItem(selectedItem);
		setIsDropdown(false);
		onClick && onClick(selectedItem);
	};
	const targetRef = useRef<HTMLDivElement | null>(null);

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

	return (
		<div className={s.container} ref={targetRef}>
			<button
				onClick={() => setIsDropdown(!isDropdown)}
				className={cn(s.selected, isDropdown && s.active)}
			>
				{customSelectedItem ? customSelectedItem : selectedItem}
				<IconArrow />
			</button>
			{isDropdown && (
				<ul className={s.list}>
					{options.map((item) => (
						<li
							className={cn(s[`list-item`], disabledItem === item && s.disabled)}
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
