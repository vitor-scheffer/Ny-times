import moment from 'moment';
import styles from './ArticleDateTag.module.css';

const ListArticleDateTag = ({ article }) => {
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
				<div className={styles.ArticleDateTagContainer}>
					<div>
						<div>
							<p>{article.section.toUpperCase()}</p>
							<a href='#'>
								<h2>{article.title}</h2>
							</a>
						</div>

						<img src={article.multimedia[2].url} alt='Article' />
					</div>
					<div>
						<p>{article.abstract}</p>
						<div>
							<small>{relativeDate} &bull;</small>
							<small>{byline}</small>
						</div>
					</div>
				</div>
			) : (
				<></>
			)}
		</>
	);
};
export default ListArticleDateTag;
