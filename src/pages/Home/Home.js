import { useEffect, useState } from 'react';
import BigImageText from '../../components/BigImageText/BigImageText';
import Opinion from '../../components/Opinion/Opinion';
import Header from '../Header/Header';
import styles from './Home.module.css';
import SmallNews from '../../components/SmallNews/SmallNews'

const Home = ({ api }) => {
	const [articles, setArticles] = useState({});
	const [opinion, setOpinion] = useState([]);
	const [smallAside, setSmallAside] = useState([]);
	const apiExists = Object.keys(api).length > 0;

	useEffect( () => {
		
		if (apiExists) {
			setArticles(api.results[6]);
			setOpinion(api.results.filter((result) => result.section === 'opinion'));
			setSmallAside(api.results.slice(13, 15))
		}
	}, [api]);

	return (
		<div>
			<Header />
			<main className={styles.home}>
				{/* coluna principal */}
				<div>
					<BigImageText article={articles} />
				</div>
				{/* linha entre main e aside */}
				<div className={styles.lineLg}></div>
				{/* aside */}
				<aside>
					<div className={styles.smallDouble}>
						<SmallNews smallAside={smallAside[0]}/>
						<div className={styles.line}></div>
						<SmallNews smallAside={smallAside[1]}/>
					</div>
					{opinion.length > 0 && <Opinion article={opinion.slice(0, 1)} />}
				</aside>
			</main>
		</div>
	);
};
export default Home;
