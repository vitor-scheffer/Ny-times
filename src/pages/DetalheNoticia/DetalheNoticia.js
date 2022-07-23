import HeaderNav from '../Header/HeaderNav/HeaderNav';

const DetalheNoticia = ({ title, img, descricao }) => {
	return (
		<div>
			<HeaderNav />
			<h3>{title}</h3>
			<p>{descricao}</p>
			<img src={img} alt='' />
		</div>
	);
};
export default DetalheNoticia;
