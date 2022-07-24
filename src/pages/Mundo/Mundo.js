import { useState, useEffect } from 'react';
import axios from 'axios';
import PageHeader from '../../components/PageHeader/PageHeader';
import Tabs from '../../components/Tabs/Tabs';
import HeroNews from '../../components/HeroNews/HeroNews';
import styles from './World.module.css';
import ListSection from '../../components/ListSection/ListSection';
import ListArticleDateTag from '../../components/ArticleDateTag/ArticleDateTag';

const Mundo = () => {
	const [worldArticles, setWorldArticles] = useState({});
	const [social, setSocial] = useState(false);

	const url =
		'https://api.nytimes.com/svc/topstories/v2/world.json?api-key=7AXlTACqQRpVzaH4Af1YBCgfwBb8cT77';

	const navArray = [
		'Africa',
		'Americas',
		'Asia',
		'Australia',
		'Canada',
		'Europe',
		'Middle East',
	];

	const Setup = async () => {
		try {
			let { data } = await axios.get(`${url}`);
			setWorldArticles(data);
			return;
		} catch (e) {
			console.log(e);
		}
	};

	useEffect(() => {
		Setup();
	}, []);

	const articlesExists = Object.keys(worldArticles).length > 0;

	return (
		<>
			{articlesExists ? (
				<div className={styles.worldPage}>
					<PageHeader title='World News' navArray={navArray} />
					<section className={styles.worldTopSection}>
						<HeroNews article={worldArticles.results[2]} type='medium' />
						<div>
							<div>
								<HeroNews article={worldArticles.results[4]} type='small' />
								<div>
									{worldArticles.results.slice(-3).map((article) => (
										<ListArticleDateTag article={article} inverted={true} />
									))}
								</div>
							</div>
						</div>
					</section>

					<section>
						<ListSection
							articles={worldArticles.results.slice(7, 12)}
							withTag={true}
						/>
						<ListSection
							articles={worldArticles.results.slice(4, 9)}
							withTag={true}
						/>
					</section>

					<section>
						<ListSection
							articles={worldArticles.results.slice(2, 7)}
							title='The Saturday Profile'
						/>

						<ListSection
							articles={worldArticles.results.slice(-5)}
							title='Dispatches'
						/>
					</section>

					<section>
						<ListSection
							articles={worldArticles.results.slice(2, 7)}
							title='Read The Times in Spanish'
						/>
					</section>
					<Tabs articles={worldArticles} social={social} />
				</div>
			) : (
				<></>
			)}
		</>
	);
};

export default Mundo;
