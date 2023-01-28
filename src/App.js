import './App.css';
import ShipList from './pages/ShipList/ShipList';
import ShipDetail from './pages/ShipDetail/ShipDetail';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="div">
      <Routes>
        <Route path='/' element={<ShipList/>}/>
        <Route path='/starships' element={<ShipDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;
