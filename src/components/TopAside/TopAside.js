import styles from './TopAside.module.css';
import { Link } from 'react-router-dom';

const TopAside = ({ mainAside }) => {
	const topExists = Object.keys(mainAside).length > 0;

	let urlSearch;
	if (topExists) {
		urlSearch = mainAside[0].url.slice(22, -5);
	}

	return (
		<>
			{topExists ? (
				<>
					<div className={styles.flexContainer}>
						<Link to={`/detalhenoticia/${urlSearch.replaceAll('/', '---')}/`}>
							<img src={mainAside[0].multimedia[1].url} alt='' />
							<span>
								<small>{}</small>
							</span>
							<h3>{mainAside[0].title}</h3>
							<p>{mainAside[0].abstract}</p>
						</Link>
					</div>
				</>
			) : (
				<div></div>
			)}
		</>
	);
};
export default TopAside;
