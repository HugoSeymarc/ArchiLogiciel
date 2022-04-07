import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Market from './pages/Market';
import Play from './pages/Play';

function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/market' element={<Market/>} />
          <Route path='/play' element={<Play/>} />
        </Routes>
      </Router>
  );
}

export default App;
