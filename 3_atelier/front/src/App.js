import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Main from './pages/Main';
import Buy from './pages/Buy';
import Game from './pages/Game';
import Sell from './pages/Sell';
import Play from './pages/Play';
import Room from './pages/Room';


function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/main' element={<Main/>} />
          <Route path='/play' element={<Play/>} />
          <Route path='/buy' element={<Buy/>} />
          <Route path='/sell' element={<Sell/>} />
          <Route path='/game' element={<Game/>} />
          <Route path='/play/room' element={<Room/>} />
        </Routes>
      </Router>
  );
}

export default App;
