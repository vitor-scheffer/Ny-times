import styles from './DetalheNoticia.module.css';
import gift from '../../images/gift.svg'
import share from '../../images/share-1.svg'
import save from '../../images/save.svg'
import HeaderTop from '../../pages/Header/HeaderTop/HeaderTop';
import { useParams } from 'react-router-dom'
import moment from 'moment';

const DetalheNoticia = ({Api}) => {
		let {title} = useParams();
		let {descricao} = useParams();
		let news = []

		Api.results.find(e => {if(e.title === title) {news.push(e)}})

		console.log(news[0].published_date)
		
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
			
		</div>
	);
};
export default DetalheNoticia;
