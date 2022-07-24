import { useState, useEffect } from 'react';
import axios from 'axios';
import PageHeader from '../../components/PageHeader/PageHeader';
import Tabs from '../../components/Tabs/Tabs';
import HeroNews from '../../components/HeroNews/HeroNews';
import styles from './Ciencia.module.css';

const Ciencia = () => {
	const [scienceArticles, setScienceArticles] = useState({});
	const [social, setSocial] = useState(true);

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
			console.log('ciencia', social);
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
					<HeroNews article={scienceArticles.results[2]} />
					<Tabs articles={scienceArticles} social={social} />
				</div>
			) : (
				<></>
			)}
		</>
	);
};
export default Ciencia;
