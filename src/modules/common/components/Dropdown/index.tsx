import { FC, useEffect, useRef, useState } from 'react';
import cn from 'classnames';

import IconArrow from '@modules/icons/components/IconArrow';

import s from './Dropdown.module.scss';

const Dropdown: FC<{
	options: {
		value: any;
		title: string;
	}[];
	disabledItem?: string;
	onClick?: (item: string) => void;
	customSelectedItem?: string;
	className?: string;
	handleOnChange?: (arg0: string, arg1: string) => void;
	label?: string;
}> = ({
	options,
	disabledItem,
	onClick,
	customSelectedItem,
	className,
	handleOnChange,
	label = '',
}) => {
	const [isDropdown, setIsDropdown] = useState(false);
	const [selectedItem, setSelectedItem] = useState<string>(options[0].title);
	const [selectedValueItem, setSelectedValueItem] = useState<string>(
		options[0].value,
	);

	const targetRef = useRef<HTMLDivElement | null>(null);

	const handleItemClick = (selectedItem: string, initialItem: string) => {
		onClick && onClick(selectedItem);
		setSelectedItem(selectedItem);
		setSelectedValueItem(initialItem);
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
		if (handleOnChange !== undefined) {
			handleOnChange(selectedValueItem, label);
		}

		setIsDropdown(false);
		// eslint-disable-next-line
	}, [selectedItem]);

	return (
		<div
			data-label={label}
			className={cn(s.container, className)}
			ref={targetRef}
		>
			<button
				onClick={() => setIsDropdown(!isDropdown)}
				className={cn(s.selected, isDropdown && s.active)}
			>
				<span>{customSelectedItem || selectedItem}</span>
				<IconArrow />
			</button>
			{isDropdown && (
				<ul className={s.list}>
					{options.map((item, i) => (
						<li
							className={cn(
								s[`list-item`],
								disabledItem === item.value && s.disabled,
								customSelectedItem || (selectedItem === item.value && s.current),
							)}
							key={item.value + i}
							onClick={() => handleItemClick(item.title, item.value)}
						>
							{item.title}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default Dropdown;
