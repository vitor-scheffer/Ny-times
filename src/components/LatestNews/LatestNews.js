import moment from 'moment';
import styles from './LatestNews.module.css';

const LatestNews = ({ article }) => {
	console.log(article);

	const data = moment(article.update_date).format('MMMM, D YYYY');
	let byline = article.byline.toUpperCase();
	byline = byline.replace('Y', 'y');

	return (
		<div className={styles.latestNews}>
			<div>{data}</div>
			<div>
				<a href='#'>
					<p>{article.title}</p>
				</a>
				<p>{article.abstract}</p>
				<small>{byline}</small>
			</div>
			<img src={article.multimedia[1].url} alt='' />
		</div>
	);
};
export default LatestNews;
