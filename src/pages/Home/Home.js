import { useEffect, useState } from 'react';
import BigImageText from '../../components/BigImageText/BigImageText';
import Opinion from '../../components/Opinion/Opinion';
import Header from '../Header/Header';

const Home = ({ api }) => {
	const [articles, setArticles] = useState({});
	const [opinion, setOpinion] = useState([]);

	const apiExists = Object.keys(api).length > 0;

	useEffect(() => {
		if (apiExists) {
			setArticles(api.results[6]);
			setOpinion(api.results.filter((result) => result.section === 'opinion'));
			console.log(opinion.slice(0, 2));
		}
	}, [api]);

	return (
		<div>
			<Header />
			<BigImageText article={articles} />
			{opinion.length > 0 && <Opinion article={opinion.slice(0, 1)} />}
		</div>
	);
};
export default Home;
