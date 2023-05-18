import './App.css';
import {Routes , Route, useLocation , useNavigate } from 'react-router-dom'
import LandingPage from './pages/LandingPage/LandingPage';
import Home from './pages/Home/Home'
import Detail from './components/Detail/Detail';
import Create from './components/Create/Create';

function App() {
  const home = !(useLocation().pathname === '/');
  return (
    <div className="App">
      <Routes>
      <Route path= "/" element= {<LandingPage/>}/>
      <Route path= '/homeSpa' element= {<Home/>}/>
      <Route path='/id/:id'element= {<Detail/>}/>
      <Route path='/pokeCreate' element= {<Create/>}/>
      </Routes>
    </div>
  );
}

export default App;
