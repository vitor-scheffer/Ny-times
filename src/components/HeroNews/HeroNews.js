import moment from 'moment';
import styles from './HeroNews.module.css';

const HeroNews = ({ article, type }) => {
	const articlesExists = article && Object.keys(article).length > 0;
	let relativeDate;
	let byline;
	if (articlesExists) {
		relativeDate = moment(article.update_date).startOf('day').fromNow();
		byline = article.byline.toUpperCase();
		byline = byline.replace('Y', 'y');
	}

	const padding = type === 'small' || type === 'medium' ? '0' : `100px`;

	const imgSize =
		type === 'small' ? '305px' : type === 'medium' ? '606px' : '810px';

	const textClass =
		imgSize !== '810px' ? `${styles.heroNoPadding}` : `${styles.heroPadding}`;

	return (
		<>
			{articlesExists ? (
				<div className={styles.heroNews}>
					<div>
						<img
							style={{ width: `${imgSize}` }}
							src={article.multimedia[0].url}
							alt='Article'
						/>
						<small>{article.multimedia[0].copyright.toUpperCase()}</small>
					</div>

					<a href='#' className={textClass}>
						<h2 className={textClass}>{article.title}</h2>
					</a>
					<p className={textClass}>{article.abstract}</p>
					<div className={textClass}>
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
