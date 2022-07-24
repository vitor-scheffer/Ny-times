import { useEffect, useState } from 'react';
import BigImageText from '../../components/BigImageText/BigImageText';
import Opinion from '../../components/Opinion/Opinion';
import Header from '../Header/Header';
import styles from './Home.module.css';
import SmallNews from '../../components/SmallNews/SmallNews'
import FirstNews from '../../components/FirstNews/FirstNews'
import Sports from '../../components/Sports/SportsNews'
import Missed from '../../components/Missed/Missed';
import TopAside from '../../components/TopAside/TopAside'
import MiddleMain from '../../components/MiddleMain/MiddleMain'

const Home = ({ api, setDescricao, setImg, setTitle, img, title, descricao}) => {
	const [articles, setArticles] = useState({});
	const [opinion, setOpinion] = useState([]);
	const [smallAside, setSmallAside] = useState([]);
	const [mainNews, setMainNews] = useState([]);
	const [middleNews, setMiddleNews] = useState([]);
	const [sports, setSports] = useState([]);
	const [missed, setMissed] = useState([]);
	const [mainAside, setMainAside] = useState([]);
	const apiExists = Object.keys(api).length > 0;

	useEffect(() => {
		if (apiExists) {
			setMainNews(api.results.slice(0,5))
			setSports(api.results[5])
			setArticles(api.results[6]);
			setMiddleNews(api.results.slice(10,28).filter((result) => result.section !== 'opinion' ))
			setMainAside(api.results.slice(7,8));
			setSmallAside(api.results.slice(8, 10));
			setOpinion(api.results.filter((result) => result.section === 'opinion'));
			setMissed(api.results.slice(28));
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
					<MiddleMain middleNews={middleNews.slice(0,2)}/>
					<MiddleMain middleNews={middleNews.slice(2,4)}/>
					<MiddleMain middleNews={middleNews.slice(4,6)}/>
					<MiddleMain middleNews={middleNews.slice(6,8)}/>
					<MiddleMain middleNews={middleNews.slice(8,10)}/>
					<MiddleMain middleNews={middleNews.slice(10,12)}/>
				</div>
				{/* linha entre main e aside */}
				<div className={styles.lineLg}></div>
				{/* aside */}
				<aside>
					<TopAside mainAside={mainAside}/>
					<div className={styles.smallDouble}>
						<SmallNews img={img} title={title} descricao={descricao} setImg={setImg} setTitle={setTitle} setDescricao={setDescricao} smallAside={smallAside.slice(0,1)}/>
						<div className={styles.line}></div>
						<SmallNews img={img} title={title} descricao={descricao} setImg={setImg} setTitle={setTitle} setDescricao={setDescricao} smallAside={smallAside.slice(1,2)}/>
					</div>
					<div className={styles.opinion}>
					<span>Opinion</span>
						{opinion.length > 0 && <Opinion isAuthor isBorder article={opinion.slice(0, 1)} />}
						{opinion.length > 0 && <Opinion isImg isBorder article={opinion.slice(1, 2)} />}
						{opinion.length > 0 && <Opinion isAuthor isBorder article={opinion.slice(2, 3)} />}
						{opinion.length > 0 && <Opinion isAuthor article={opinion.slice(3, 4)} />}
					</div>
					<div className={styles.opinion}>
						{opinion.length > 0 && <Opinion isBorder article={opinion.slice(4, 5)} />}
						{opinion.length > 0 && <Opinion isImg isBorder article={opinion.slice(5, 6)} />}
						{opinion.length > 0 && <Opinion isBorder article={opinion.slice(6, 7)} />}
						{opinion.length > 0 && <Opinion article={opinion.slice(7, 8)} />}
						{/* {opinion.length > 0 && <Opinion article={opinion.slice(8, 9)} />} */}
					</div>
					<div className={styles.missed}>
						<span>In Case You Missed It</span>
					<Missed isBorder missed={missed.slice(0,1)}/>
					<Missed isBorder missed={missed.slice(1,2)}/>
					<Missed isBorder missed={missed.slice(2,3)}/>
					<Missed isBorder missed={missed.slice(3,4)}/>
					<Missed isBorder missed={missed.slice(4,5)}/>
					<Missed isBorder missed={missed.slice(5,6)}/>
					<Missed missed={missed.slice(6,7)}/>
					<Missed missed={missed.slice(7,8)}/>
					<Missed missed={missed.slice(8,9)}/>
					</div>
					
				</aside>
			</main>
		</div>
	);
};
export default Home;
