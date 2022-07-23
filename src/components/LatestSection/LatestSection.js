import LatestNews from './LatestNews/LatestNews';
import SignUpAside from '../SignUpAside/SignUpAside';
import styles from './LatestSection.module.css';

const LatestSection = ({ articles }) => {
	const articlesExists = Object.keys(articles).length > 0;

	return (
		<section className={styles.latestSection}>
			<div>
				{articlesExists ? (
					articles.results
						.slice(3)
						.map((article) => (
							<LatestNews key={article.url} article={article} />
						))
				) : (
					<></>
				)}
			</div>
			{articlesExists ? (
				<SignUpAside
					article={articles.results[0]}
					socialMedia='NYTimesScience'
				/>
			) : (
				<></>
			)}
		</section>
	);
};
export default LatestSection;
