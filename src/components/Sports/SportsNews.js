import styles from './SportsNews.module.css';
import { Link } from 'react-router-dom';

const SportsNews = ({ sports }) => {
	const sportsExists = Object.keys(sports).length > 0;
	let urlSearch;
	if (sportsExists) {
		urlSearch = sports.url.slice(22, -5);
	}

	return (
		<>
			{sportsExists ? (
				<Link to={`/detalhenoticia/${urlSearch.replaceAll('/', '---')}/`}>
					<div className={styles.containerFlex}>
						<div>
							<h3>{sports.title}</h3>
							<p>{sports.abstract}</p>
						</div>
						<div>
							<img src={sports.multimedia[1].url} alt='' />
							<p>
								<small>{sports.multimedia[1].copyright}</small>
							</p>
						</div>
					</div>
				</Link>
			) : (
				<div></div>
			)}
		</>
	);
};
export default SportsNews;
