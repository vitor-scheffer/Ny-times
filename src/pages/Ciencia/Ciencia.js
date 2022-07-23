import { useState, useEffect } from 'react';
import axios from 'axios';
import PageHeader from '../../components/PageHeader/PageHeader';
import LatestNews from '../../components/LatestNews/LatestNews';
import SignUpAside from '../../components/SignUpAside/SignUpAside';
import styles from './Ciencia.module.css';

const Ciencia = () => {
	const [scienceArticles, setScienceArticles] = useState({});
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
			console.log(scienceArticles);
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
		<div>
			<PageHeader title='Science' navArray={navArray} />
			<section className={styles.latestSection}>
				<div>
					{articlesExists ? (
						scienceArticles.results
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
						article={scienceArticles.results[0]}
						socialMedia='NYTimesScience'
					/>
				) : (
					<></>
				)}
			</section>
		</div>
	);
};
export default Ciencia;
