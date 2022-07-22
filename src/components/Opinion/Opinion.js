import styles from './Opinion.module.css';

const Opinion = ({ article }) => {
	const articleExists = article && article.length > 0;

	return (
		<>
			{articleExists ? (
				<div className={styles.opinion}>
					<p>{article[0].kicker.toUpperCase()}</p>
					<h3>{article[0].title}</h3>
					{/* <img src={article.multimedia[2].url} alt='Thumbnail' /> */}
				</div>
			) : (
				<></>
			)}
		</>
	);
};
export default Opinion;
