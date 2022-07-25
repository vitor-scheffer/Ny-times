import moment from 'moment';
import styles from './ArticleDateTag.module.css';
import { Link } from 'react-router-dom';

const ListArticleDateTag = ({ article, inverted }) => {
	const articlesExists = article && Object.keys(article).length > 0;
	let relativeDate;
	let byline;
	if (articlesExists) {
		relativeDate = moment(article.update_date).startOf('day').fromNow();
		byline = article.byline.toUpperCase();
		byline = byline.replace('Y', 'y');
	}
	const urlSearch = article.url.slice(22, -5);

	return (
		<>
			{articlesExists ? (
				<Link to={`/detalhenoticia/${urlSearch.replaceAll('/', '---')}/`}>
					<div className={styles.ArticleDateTagContainer}>
						<div>
							<div>
								<p>{article.section.toUpperCase()}</p>
								<a href='#'>
									<h2>{article.title}</h2>
								</a>
							</div>

							{!inverted && (
								<img src={article.multimedia[2].url} alt='Article' />
							)}
						</div>
						<div>
							{inverted && (
								<div className={styles.inverted}>
									<img src={article.multimedia[2].url} alt='Article' />
									<p>{article.abstract}</p>
								</div>
							)}
							{!inverted && <p>{article.abstract}</p>}
							<div>
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
export default ListArticleDateTag;
