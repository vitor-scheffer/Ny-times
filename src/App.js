import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Home from './pages/Home/Home';
import Ciencia from './pages/Ciencia/Ciencia';
import Tecnologia from './pages/Tecnologia/Tecnologia';
import Mundo from './pages/Mundo/Mundo';
import Politica from './pages/Politica/Politica';
import Saude from './pages/Saude/Saude';
import Header from './pages/Header/Header';
import Footer from './pages/Footer/Footer';
import DetalheNoticia from './pages/DetalheNoticia/DetalheNoticia';

function App() {
	const url =
		'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=7AXlTACqQRpVzaH4Af1YBCgfwBb8cT77';

	const [Api, setApi] = useState({});
	// const [articles, setArticles] = useState({});
	// const [title, setTitle] = useState()
	// const [descricao, setDescricao] = useState()
	// const [img, setImg] = useState()

	const Setup = async () => {
		try {
			let { data } = await axios.get(`${url}`);
			setApi(data);
			return;
		} catch (e) {
			console.log(e);
		}
	};

	useEffect(() => {
		Setup();
	}, []);

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route exact path='/' element={<Home api={Api} />}></Route>
					<Route path='/detalhenoticia' element={<DetalheNoticia />}></Route>
					<Route path='/ciencia' element={<Ciencia />}></Route>
					<Route path='/tecnologia' element={<Tecnologia />}></Route>
					<Route path='/saude' element={<Saude />}></Route>
					<Route path='/politica' element={<Politica />}></Route>
					<Route path='/mundo' element={<Mundo />}></Route>
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
