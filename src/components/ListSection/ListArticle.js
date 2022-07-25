import styles from './ListArticle.module.css';
import { Link } from 'react-router-dom';

const ListArticle = ({ article, withTag }) => {
	const articlesExists = article && Object.keys(article).length > 0;
	const urlSearch = article.url.slice(22, -5);

	return (
		<>
			{articlesExists ? (
				<Link to={`/detalhenoticia/${urlSearch.replaceAll('/', '---')}/`}>
					<div className={styles.listArticleContainer}>
						{withTag && <small>{article.section.toUpperCase()}</small>}
						<div>
							<a href='#'>
								<img src={article.multimedia[1].url} alt='Article' />

								<h2>{article.title}</h2>
							</a>
						</div>
					</div>
				</Link>
			) : (
				<></>
			)}
		</>
	);
};
export default ListArticle;
