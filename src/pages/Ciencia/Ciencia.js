import { useState, useEffect } from 'react';
import axios from 'axios';
import PageHeader from '../../components/PageHeader/PageHeader';
import Tabs from '../../components/Tabs/Tabs';
import HeroNews from '../../components/HeroNews/HeroNews';
import styles from './Ciencia.module.css';
import ListSection from '../../components/ListSection/ListSection';
import ListArticleDateTag from '../../components/ArticleDateTag/ArticleDateTag';

const Ciencia = () => {
	const [scienceArticles, setScienceArticles] = useState({});
	const [social, setSocial] = useState({
		title: 'science',
		abstract:
			'Every week, we’ll bring you stories that capture the wonders of the human body, nature and the cosmos.',
		handle: 'NYTimesScience',
	});

	const url =
		'https://api.nytimes.com/svc/topstories/v2/science.json?api-key=7AXlTACqQRpVzaH4Af1YBCgfwBb8cT77';

	const navArray = [
		'DealBook',
		'Markets',
		'Economy',
		'Energy',
		'Media',
		'Technology',
		'Personal Tech',
		'Small Business',
		'Your Money',
		'Mutual Funds & ETFs',
	];

	const Setup = async () => {
		try {
			let { data } = await axios.get(`${url}`);
			setScienceArticles(data);
			return;
		} catch (e) {
			console.log(e);
		}
	};

	useEffect(() => {
		Setup();
	}, []);

	const articlesExists = Object.keys(scienceArticles).length > 0;

	return (
		<>
			{articlesExists ? (
				<div className={styles.sciencePage}>
					<PageHeader title='Science' navArray={navArray} />
					<section className={styles.topSection}>
						<HeroNews article={scienceArticles.results[2]} />
						<div>
							{scienceArticles.results.slice(-3).map((article) => (
								<ListArticleDateTag article={article} key={article.uri} />
							))}
						</div>
					</section>

					<section>
						<ListSection
							articles={scienceArticles.results.slice(7, 12)}
							withTag={true}
						/>
					</section>

					<section>
						{/* lista de environment */}
						<ListSection
							articles={scienceArticles.results.slice(2, 7)}
							title='Climate and Environment'
						/>
						{/* outra lista */}
						<ListSection
							articles={scienceArticles.results.slice(2, 7)}
							title='Climate and Environment'
						/>
					</section>
					<Tabs articles={scienceArticles} social={social} />
				</div>
			) : (
				<></>
			)}
		</>
	);
};
export default Ciencia;
