import HeaderTop from '../../pages/Header/HeaderTop/HeaderTop';
import styles from './PageHeader.module.css';

//Recebe o titulo da pagina, e um array com os links do navegador
//<PageHeader title="Science" navArray=["titulo1", "titulo2"]>

const PageHeader = ({ title, navArray }) => {
	return (
		<div className={styles.pageHeader}>
			<HeaderTop headerType='page' title={title} />
			<div>
				<h1>{title}</h1>
			</div>
			<ul>
				{navArray.map((item) => (
					<li>
						<a href='#'>{item.toUpperCase()}</a>
					</li>
				))}
			</ul>
		</div>
	);
};
export default PageHeader;
