import moment from 'moment';
import styles from './HeroNews.module.css';
import { Link } from 'react-router-dom'

const HeroNews = ({ article, type, direction }) => {
	const articlesExists = article && Object.keys(article).length > 0;
	let relativeDate;
	let byline;
	if (articlesExists) {
		relativeDate = moment(article.update_date).startOf('day').fromNow();
		byline = article.byline.toUpperCase();
		byline = byline.replace('Y', 'y');
	}

	let imgSize =
		type === 'small' ? '305px' : type === 'medium' ? '606px' : '810px';
	if (type === 'small2') {
		imgSize = '374px';
	}
	if (direction === 'row') {
		const mediumSize = article.multimedia[0].width * 0.25;
		const largeSize = article.multimedia[0].width * 0.3;
		imgSize = type === 'large' ? `${largeSize}px` : `${mediumSize}px`;
	}

	const textClass =
		imgSize !== '810px' ? `${styles.heroNoPadding}` : `${styles.heroPadding}`;

	const containerClass =
		direction === 'row' ? `${styles.rowContainer}` : `${styles.heroNews}`;

	return (
		<>
			{articlesExists ? (
				<Link to={`/detalhenoticia/${article.title}/${article.abstract}`}>
				<div className={containerClass}>
					<div className={styles.heroImageDiv}>
						<img
							style={{ width: `${imgSize}` }}
							src={article.multimedia[0].url}
							alt='Article'
						/>
						<small>{article.multimedia[0].copyright.toUpperCase()}</small>
					</div>
					<div className={styles.heroTextDiv}>
						<a href='#' className={textClass}>
							<h2 className={textClass}>{article.title}</h2>
						</a>
						<p className={textClass}>{article.abstract}</p>
						<div className={textClass}>
							<small>{relativeDate} &bull;</small>
							<small>{byline}</small>
						</div>
					</div>
				</div>
				</Link>
			) : (
				<></>
			)}
		</>
	);
};
export default HeroNews;
