import ListArticle from './ListArticle';
import styles from './ListSection.module.css';

const ListSection = ({ articles, title }) => {
	return (
		<section className={styles.listSectionContainer}>
			<div>
				<a href='#'>
					<h2>{title}</h2>
				</a>
				<a href='#'>
					<small>More in {title} &gt; </small>
				</a>
			</div>

			<div className={styles.listContainer}>
				{articles.map((article) => (
					<ListArticle article={article} key={article.url} />
				))}
			</div>
		</section>
	);
};
export default ListSection;
