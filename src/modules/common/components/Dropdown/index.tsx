import { FC, useEffect, useRef, useState } from 'react';
import IconArrow from '@icons/components/IconArrow';
import cn from 'classnames';

import type { DropdownOptions } from '@modules/common/types/dropdown';

import s from './Dropdown.module.scss';

const Dropdown: FC<{
	options: DropdownOptions[];
	currentOption: DropdownOptions;
	className?: string;
	handleOnChange: (arg0: DropdownOptions, arg1: string) => void;
	label?: string;
}> = ({ options, currentOption, className, handleOnChange, label = '' }) => {
	const [isDropdown, setIsDropdown] = useState(false);
	const [selectedOption, setSelectedOption] = useState<DropdownOptions>(
		currentOption || options[0],
	);
	const targetRef = useRef<HTMLDivElement | null>(null);

	const handleItemClick = (value: DropdownOptions) => {
		setSelectedOption(value);
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
		handleOnChange(selectedOption, label);
		setIsDropdown(false);
		// eslint-disable-next-line
	}, [selectedOption]);

	useEffect(() => {
		if (currentOption?.value && currentOption.value !== selectedOption.value) {
			setSelectedOption(currentOption);
		}

		// eslint-disable-next-line
	}, [currentOption]);

	return (
		<div className={cn(s.container, className)} ref={targetRef}>
			<button
				onClick={() => setIsDropdown(!isDropdown)}
				className={cn(s.selected, isDropdown && s.active)}
			>
				<span>{selectedOption.title}</span>
				<IconArrow />
			</button>
			{isDropdown && (
				<ul className={s.list}>
					{options.map((item, i) => (
						<li
							className={cn(
								s.listItem,
								item.value === selectedOption.value && s.current,
							)}
							key={item.value + i}
							onClick={() => handleItemClick(item)}
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
