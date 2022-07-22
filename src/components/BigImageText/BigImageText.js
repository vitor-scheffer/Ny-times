import styles from './BigImageText.module.css';

const BigImageText = ({ article }) => {
	const articleExists = Object.keys(article).length > 0;

	return (
		<>
			{articleExists ? (
				<div className={styles.bigImageText}>
					<div>
						<h3>{article.title}</h3>
						<p>{article.abstract}</p>
					</div>
					<div>
						<img src={article.multimedia[1].url} alt='' />
						<p>
							{article.multimedia[1].caption}
							<small>{article.multimedia[1].copyright}</small>
						</p>
					</div>
				</div>
			) : (
				<div></div>
			)}
		</>
	);
};
export default BigImageText;
