import styles from './DetalheNoticia.module.css';
import gift from '../../images/gift.svg'
import share from '../../images/share-1.svg'
import save from '../../images/save.svg'
import HeaderTop from '../../pages/Header/HeaderTop/HeaderTop';

const DetalheNoticia = ({ title, img, descricao }) => {
	return (
		<div>
			<HeaderTop type='page' title='' className={styles.header}/>
			<div className={styles.flexContainer}>
				<h3>{title}</h3>
				<p>{descricao}</p>
				<div className={styles.interactions}>
						<button><img src={gift} alt="" />Give this article</button>
						<button><img src={share} alt="" /></button>
						<button><img src={save} alt="" /></button>
				</div>
				<img src={img} alt='' />
			</div>
			
		</div>
	);
};
export default DetalheNoticia;
