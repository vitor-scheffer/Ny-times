import { useState, useEffect } from 'react';
import axios from 'axios';
import PageHeader from '../../components/PageHeader/PageHeader';
import LatestNews from '../../components/LatestNews/LatestNews';

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
			{articlesExists ? (
				<LatestNews article={scienceArticles.results[3]} />
			) : (
				<></>
			)}

			{/* <LatestNews article={scienceArticles.results[3]} /> */}
		</div>
	);
};
export default Ciencia;
