import HeaderMainTitle from './HeaderMainTitle/HeaderMainTitle';
import HeaderNav from './HeaderNav/HeaderNav';

import styles from './Header.module.css';
import HeaderTop from './HeaderTop/HeaderTop';

const Header = () => {
	return (
		<header>
			<HeaderTop headerType='main' title='' />
			<HeaderMainTitle />
			<HeaderNav />
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
