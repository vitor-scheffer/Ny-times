import styles from './DetalheNoticia.module.css';
import gift from '../../images/gift.svg'
import share from '../../images/share-1.svg'
import save from '../../images/save.svg'
import HeaderTop from '../../pages/Header/HeaderTop/HeaderTop';
import { useParams } from 'react-router-dom'
import moment from 'moment';
import { useState, useEffect} from 'react'
import axios from 'axios';

const DetalheNoticia = ({Api}) => {
		let {title} = useParams();
		let {descricao} = useParams();
		// const [scienceArticles, setScienceArticles] = useState({});
		// const [worldArticles, setWorldArticles] = useState({});
		// const [politicsArticles, setPoliticsArticles] = useState({});
		// const [healthArticles, setHealthArticles] = useState({});
		// const [techArticles, setTechArticles] = useState({});
		let news = []

		Api.results.find(e => {if(e.title === title) {news.push(e)}})
		
	// const Setup = async () => {
	// 	try {
	// 		let { data: scienceData } = await axios.get('https://api.nytimes.com/svc/topstories/v2/science.json?api-key=7AXlTACqQRpVzaH4Af1YBCgfwBb8cT77');
	// 		let { data: worldData } = await axios.get('https://api.nytimes.com/svc/topstories/v2/world.json?api-key=7AXlTACqQRpVzaH4Af1YBCgfwBb8cT77');
	// 		let { data: politicsData } = await axios.get('https://api.nytimes.com/svc/topstories/v2/politics.json?api-key=7AXlTACqQRpVzaH4Af1YBCgfwBb8cT77');
	// 		let { data: healthData } = await axios.get('https://api.nytimes.com/svc/topstories/v2/health.json?api-key=7AXlTACqQRpVzaH4Af1YBCgfwBb8cT77');
	// 		let { data: techData } = await axios.get('https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=7AXlTACqQRpVzaH4Af1YBCgfwBb8cT77');
	// 		setScienceArticles(scienceData);
	// 		setWorldArticles(worldData);
	// 		setTechArticles(techData);
	// 		setHealthArticles(healthData);
	// 		setPoliticsArticles(politicsData);
	// 		scienceArticles.results.find(e => {if(e.title === title) {news.push(e)}})
	// 		worldArticles.results.find(e => {if(e.title === title) {news.push(e)}})
	// 		politicsArticles.results.find(e => {if(e.title === title) {news.push(e)}})
	// 		techArticles.results.find(e => {if(e.title === title) {news.push(e)}})
	// 		healthArticles.results.find(e => {if(e.title === title) {news.push(e)}})
	// 		// return;
	// 	} catch (e) {
	// 		console.log(e);
	// 	}
	// };

	// useEffect(() => {
	// 	Setup();
	// }, []);

	// const worldExists = Object.keys(worldArticles).length > 0;
	// const scienceExists = Object.keys(scienceArticles).length > 0;
	// const politicsExists = Object.keys(politicsArticles).length > 0;
	// const healthExists = Object.keys(healthArticles).length > 0;
	// const techExists = Object.keys(techArticles).length > 0;

	return (
			<div>
			<HeaderTop headerType='page' title='' className={styles.header}/>
			<div className={styles.flexContainer}>
				<h3>{title}</h3>
				<p>{descricao}</p>
				<div className={styles.authInfo}>
					<span><strong>{moment(news[0].published_date).format('LL')}</strong></span>
					<span>{news[0].byline.substring(3)}</span>
				</div>
				<div className={styles.interactions}>
						<button><img src={gift} alt="" />Give this article</button>
						<button><img src={share} alt="" /></button>
						<button><img src={save} alt="" /></button>
				</div>
				<img src={news[0].multimedia[0].url} alt='' />
			</div>
			</div>);
}
export default DetalheNoticia;
