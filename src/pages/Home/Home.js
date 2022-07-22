import SmallNews from "../../components/SmallNews/SmallNews";
import TituloDescricao from "../../components/TituloDescricao/TituloDescricao";

const Home = ({news}) => {
	return (
		<>
		<SmallNews titulo={news[0].title} img={news[0].multimedia}/>
		<SmallNews titulo={news[1].title} img={news[1].multimedia}/>
		<TituloDescricao titulo={news[4].title} descricao={news[4].abstract} isBorder/>
		</>
	)
};
export default Home;
