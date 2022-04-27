import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Market from './pages/Market';
import Buy from './pages/Buy';

function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/market' element={<Market/>} />
          <Route path='/play' element={<Play/>} />
          <Route path='/buy' element={<Buy/>} />
          <Route path='/sell' element={<Sell/>} />
          <Route path='/game' element={<Game/>} />
        </Routes>
      </Router>
  );
}

export default App;
