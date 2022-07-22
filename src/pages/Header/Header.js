import HeaderTitle from './HeaderTitle';
import FullNav from './FullNav';

import { MdOutlineMenu } from 'react-icons/md';
import { BiSearchAlt2 } from 'react-icons/bi';

import styles from './Header.module.css';

const Header = () => {
	return (
		<header>
			<div className={styles.firstSection}>
				<div>
					<MdOutlineMenu />
					<BiSearchAlt2 />
				</div>
				<ul>
					<li>
						<a href='#'>U.S.</a>
					</li>
					<li>
						<a href='#'>INTERNATIONAL</a>
					</li>
					<li>
						<a href='#'>CANADA</a>
					</li>
					<li>
						<a href='#'>ESPAÑOL</a>
					</li>
					<li>
						<a href='#'>中文</a>
					</li>
				</ul>
				<div>
					<button>SUBSCRIBE FOR $0.25/WEEK</button>
					<button>LOG IN</button>
				</div>
			</div>
			<HeaderTitle />
			<FullNav />
			<div className={styles.liveSection}>
				<p>LIVE</p>
				<a href='#'>
					Russia-Ukraine War <small>1min ago</small>
				</a>

				<a href='#'>
					Coronavirus Pandemic <small>2min ago</small>
				</a>

				<a href='#'>
					Jan. 6 Hearings <small>3min ago</small>
				</a>
			</div>
		</header>
	);
};
export default Header;
