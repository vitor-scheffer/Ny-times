import { MdOutlineMenu } from 'react-icons/md';
import { BiSearchAlt2 } from 'react-icons/bi';
import Title from '../../../images/theNewYorkTimes.svg';
import { Link } from 'react-router-dom';

import styles from './HeaderTop.module.css';

//Recebe tipo de header: "main", "page"
//No caso de ser page, recebe o titulo da pagina
// <HeaderTop headerType="page" title="Science" />

const HeaderTop = (props) => {
	console.log(props.headerType);
	let imgClasse =
		props.headerType === 'main' ? `${styles.hide}` : `${styles.show}`;

	const listClass =
		props.headerType === 'main' ? `${styles.show}` : `${styles.hide}`;
	const titleClass = imgClasse;

	return (
		<div className={styles.firstSection}>
			<div>
				<a href='#'>
					<MdOutlineMenu />
				</a>
				<a href='#'>
					<BiSearchAlt2 />
				</a>
				<a href='#' className={titleClass}>
					<h2>{props.title.toUpperCase()}</h2>
				</a>
			</div>
			<ul className={listClass}>
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
			<Link to="/" className={imgClasse}><img className={imgClasse} src={Title} alt='The New York Times'></img></Link>
			<div>
				<button>SUBSCRIBE FOR $0.25/WEEK</button>
				<button>LOG IN</button>
			</div>
		</div>
	);
};
export default HeaderTop;
