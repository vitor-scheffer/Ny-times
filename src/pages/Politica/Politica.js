import axios from 'axios';
import { useEffect, useState } from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import styles from './Politics.module.css';
import Tabs from '../../components/Tabs/Tabs';
import HeroNews from '../../components/HeroNews/HeroNews';
import ListArticleDateTag from '../../components/ArticleDateTag/ArticleDateTag';

const Politica = () => {
	const [politicsArticles, setPoliticsArticles] = useState({});
	const [social, setSocial] = useState({
		title: 'The On Politics Newsletter',
		abstract:
			'A Times reader’s guide to the political news in Washington and across the nation.',
		handle: 'nytpolitics',
	});

	const url =
		'https://api.nytimes.com/svc/topstories/v2/politics.json?api-key=7AXlTACqQRpVzaH4Af1YBCgfwBb8cT77';

	const navArray = ['Joe Biden', '2022 Midterm Elections'];

	const Setup = async () => {
		try {
			let { data } = await axios.get(`${url}`);
			setPoliticsArticles(data);
			return;
		} catch (e) {
			console.log(e);
		}
	};

	useEffect(() => {
		Setup();
	}, []);

	const articlesExists = Object.keys(politicsArticles).length > 0;

	return (
		<>
			{articlesExists ? (
				<div className={styles.politicsPage}>
					<PageHeader title='U.S. Politics' navArray={navArray} />
					<section>
						<section>
							<HeroNews
								article={politicsArticles.results[2]}
								type='medium'
								direction='row'
							/>

							<HeroNews
								article={politicsArticles.results[4]}
								type='medium'
								direction='row'
							/>
						</section>
						<section>
							<ListArticleDateTag
								article={politicsArticles.results[5]}
								inverted={true}
							/>
							<ListArticleDateTag
								article={politicsArticles.results[6]}
								inverted={true}
							/>
						</section>
					</section>

					<Tabs articles={politicsArticles} social={social} />
				</div>
			) : (
				<></>
			)}
		</>
	);
};
export default Politica;
