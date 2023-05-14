import './App.css';
import {Routes , Route, useLocation , useNavigate } from 'react-router-dom'
import LandingPage from './pages/LandingPage/LandingPage';
import Cards from './components/Cards/Cards'
import Detail from './components/Detail/Detail';

function App() {
  const home = !(useLocation().pathname === '/');
  return (
    <div className="App">
      <Routes>
      <Route path= "/" element= {<LandingPage/>}/>
      <Route path= '/homeSpa' element= {<Cards/>}/>
      <Route path='/id/:id'element= {<Detail/>}/>
      <Route path='/pokeCreate'/>
      </Routes>
    </div>
  );
}

export default App;
