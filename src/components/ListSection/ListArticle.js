import styles from './ListArticle.module.css';

const ListArticle = ({ article, withTag }) => {
	const articlesExists = article && Object.keys(article).length > 0;

	return (
		<>
			{articlesExists ? (
				<div className={styles.listArticleContainer}>
					{withTag && <small>{article.section.toUpperCase()}</small>}
					<div>
						<a href='#'>
							<img src={article.multimedia[1].url} alt='Article' />

							<h2>{article.title}</h2>
						</a>
					</div>
				</div>
			) : (
				<></>
			)}
		</>
	);
};
export default ListArticle;
