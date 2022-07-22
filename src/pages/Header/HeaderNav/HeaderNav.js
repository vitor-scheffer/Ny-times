import { Link } from 'react-router-dom';
import styles from './HeaderNav.module.css';

const FullNav = () => {
	return (
		<nav className={styles.headerNav}>
			<ul>
				<li>
					<Link to='/mundo'>World</Link>
				</li>
				<li>
					<a href='#'>U.S.</a>
				</li>
				<li>
					<Link to='/politica'>Politics</Link>
				</li>
				<li>
					<a href='#'>N.Y.</a>
				</li>
				<li>
					<a href='#'>Business</a>
				</li>
				<li>
					<a href='#'>Opinion</a>
				</li>
				<li>
					<Link to='/tecnologia'>Tech</Link>
				</li>
				<li>
					<Link to='/ciencia'>Science</Link>
				</li>
				<li>
					<Link to='/saude'>Health</Link>
				</li>
				<li>
					<a href='#'>Sports</a>
				</li>
				<li>
					<a href='#'>Arts</a>
				</li>
				<li>
					<a href='#'>Books</a>
				</li>
				<li>
					<a href='#'>Style</a>
				</li>
				<li>
					<a href='#'>Food</a>
				</li>
				<li>
					<a href='#'>Travel</a>
				</li>
				<li>
					<a href='#'>Magazine</a>
				</li>
				<li>
					<a href='#'>T Magazine</a>
				</li>
				<li>
					<a href='#'>Real Estate</a>
				</li>
				<li>
					<a href='#'>Video</a>
				</li>
			</ul>
		</nav>
	);
};
export default FullNav;
