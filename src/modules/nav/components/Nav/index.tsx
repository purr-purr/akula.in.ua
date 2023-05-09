import NavItem from "@modules/nav/components/NavItem";
import {NAVIGATION} from "@utils/data";

const Nav = () => {
	return (
		<nav>
				{NAVIGATION.map((item) => (
					<NavItem
						key={item.path}
						title={item.title}
						path={item.path}
					/>
				))}
		</nav>
	);
};

export default Nav;
