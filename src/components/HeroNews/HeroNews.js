import moment from 'moment';
import styles from './HeroNews.module.css';

const HeroNews = ({ article }) => {
	const articlesExists = article && Object.keys(article).length > 0;
	let relativeDate;
	let byline;
	if (articlesExists) {
		relativeDate = moment(article.update_date).startOf('day').fromNow();
		byline = article.byline.toUpperCase();
		byline = byline.replace('Y', 'y');
	}

	return (
		<>
			{articlesExists ? (
				<div className={styles.heroNews}>
					<div>
						<img src={article.multimedia[0].url} alt='Article' />
						<small>{article.multimedia[0].copyright.toUpperCase()}</small>
					</div>

					<a href='#'>
						<h2>{article.title}</h2>
					</a>
					<p>{article.abstract}</p>
					<div>
						<small>{relativeDate} &bull;</small>
						<small>{byline}</small>
					</div>
				</div>
			) : (
				<></>
			)}
		</>
	);
};
export default HeroNews;
