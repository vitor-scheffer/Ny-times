import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route path="/" element={<Home />}></Route>
      <Route path="/" element={<Home />}></Route>
      <Route path="/" element={<Home />}></Route>
      <Route path="/" element={<Home />}></Route>

    </Routes>
    </BrowserRouter>
    </>
  
  );
}

export default App;
