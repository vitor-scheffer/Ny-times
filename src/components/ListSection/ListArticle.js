import styles from './ListArticle.module.css';

const ListArticle = ({ article }) => {
	const articlesExists = article && Object.keys(article).length > 0;

	return (
		<>
			{articlesExists ? (
				<div className={styles.listArticleContainer}>
					<img src={article.multimedia[1].url} alt='Article' />
					<a href='#'>
						<h2>{article.title}</h2>
					</a>
				</div>
			) : (
				<></>
			)}
		</>
	);
};
export default ListArticle;
