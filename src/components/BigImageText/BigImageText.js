import styles from './BigImageText.module.css';
import { Link } from 'react-router-dom'

const BigImageText = ({ article }) => {
	const articleExists = Object.keys(article).length > 0;

	return (
		<>
			{articleExists ? (
				<Link to={`/detalhenoticia/${article.title}/${article.abstract}`}>
				<div className={styles.bigImageText}>
					<div>
						<a href='#'>
							<h3>{article.title}</h3>
						</a>
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
				</Link>
			) : (
				<div></div>
			)}
		</>
	);
};
export default BigImageText;
