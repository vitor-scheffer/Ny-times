import { Link } from 'react-router-dom';
import moment from 'moment';
import styles from './LatestNews.module.css';

const LatestNews = ({ article }) => {
	const articleExists = Object.keys(article).length > 0;
	const data = moment(article.update_date).format('MMMM, D YYYY');
	let byline = article.byline.toUpperCase();
	byline = byline.replace('Y', 'y');
	const urlSearch = article.url.slice(22, -5);

	return (
		<>
			{articleExists ? (
				<Link to={`/detalhenoticia/${urlSearch.replaceAll('/', '---')}/`}>
					<div className={styles.latestNews}>
						<div>{data}</div>
						<div>
							<a href='#'>
								<p>{article.title}</p>
							</a>
							<p>{article.abstract}</p>
							<small>{byline}</small>
						</div>
						{'multimedia' in article && article.multimedia !== null ? (
							<img src={article.multimedia[1].url} alt='' />
						) : (
							<></>
						)}
					</div>
				</Link>
			) : (
				<></>
			)}
		</>
	);
};
export default LatestNews;
