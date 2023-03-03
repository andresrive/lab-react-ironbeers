import './App.css';
import { Route, Routes } from 'react-router-dom';
import BeerHome from './pages/BeerHome'
import BeersList from './pages/BeersList'
import BeerNew from './pages/BeerNew'
import BeerRandom from './pages/BeerRandom'
import BeerDetails from './pages/BeerDetails'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<BeerHome />} />
        <Route path='/beers' element={<BeersList />} />
        <Route path='/beers/random' element={<BeerRandom />} />
        <Route path='/beers/new' element={<BeerNew />} />
        <Route path='/beers/:id' element={<BeerDetails />} />
      </Routes>
    </div>
  );
}

export default App;
