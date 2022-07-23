import styles from './Opinion.module.css';

const Opinion = ({ article, isImg, isBorder}) => {
	const articleExists = article && article.length > 0;

	return (
		<>
			{articleExists ? (
				<div className={styles.opinion} style={{borderBottom: isBorder ? '1px solid #dfdfdf' : ''}}>
					<div>
						<p>{article[0].kicker.toUpperCase()}</p>
						<h3>{article[0].title}</h3>
					</div>
					{isImg ? <img src={article[0].multimedia[2].url} alt='Thumbnail' /> : ''}
				</div>
			) : (
				<></>
			)}
		</>
	);
};
export default Opinion;
