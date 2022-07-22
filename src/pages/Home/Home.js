import BigImageText from '../../components/BigImageText/BigImageText';
import Header from '../Header/Header';

const Home = ({ articles }) => {
	return (
		<div>
			<Header />
			<BigImageText article={articles} />
		</div>
	);
};
export default Home;
