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
function App() {
	const url =
		'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=7AXlTACqQRpVzaH4Af1YBCgfwBb8cT77';
	const [Api, setHome] = useState({});
	const [articles, setArticles] = useState({});

	const Setup = async () => {
		try {
			let { data } = await axios.get(`${url}`);
			setHome(data);
			setArticles(data.results[6]);
			console.log(articles);
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
				{/* <Header /> */}
				<Routes>
					<Route exact path='/' element={<Home articles={articles} />}></Route>
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
