import { useEffect, useState } from 'react';
import BigImageText from '../../components/BigImageText/BigImageText';
import Opinion from '../../components/Opinion/Opinion';
import Header from '../Header/Header';
import styles from './Home.module.css';
import SmallNews from '../../components/SmallNews/SmallNews'
import FirstNews from '../../components/FirstNews/FirstNews'
import Sports from '../../components/Sports/SportsNews'

const Home = ({ api, setDescricao, setImg, setTitle, img, title, descricao}) => {
	const [articles, setArticles] = useState({});
	const [opinion, setOpinion] = useState([]);
	const [smallAside, setSmallAside] = useState([]);
	const [mainNews, setMainNews] = useState([]);
	const [sports, setSports] = useState([]);
	const apiExists = Object.keys(api).length > 0;

	useEffect( () => {
		
		if (apiExists) {
			setMainNews(api.results.slice(0,5))
			setSports(api.results[5])
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
					<FirstNews mainNews={mainNews} />
					<Sports sports={sports}/>
					<BigImageText article={articles} />
				</div>
				{/* linha entre main e aside */}
				<div className={styles.lineLg}></div>
				{/* aside */}
				<aside>
					<div className={styles.smallDouble}>
						<SmallNews img={img} title={title} descricao={descricao} setImg={setImg} setTitle={setTitle} setDescricao={setDescricao} smallAside={smallAside.slice(0,1)}/>
						<div className={styles.line}></div>
						<SmallNews img={img} title={title} descricao={descricao} setImg={setImg} setTitle={setTitle} setDescricao={setDescricao} smallAside={smallAside.slice(1,2)}/>
					</div>
					{opinion.length > 0 && <Opinion article={opinion.slice(0, 1)} />}
					{opinion.length > 0 && <Opinion article={opinion.slice(1, 2)} />}
					{opinion.length > 0 && <Opinion article={opinion.slice(2, 3)} />}
				</aside>
			</main>
		</div>
	);
};
export default Home;
