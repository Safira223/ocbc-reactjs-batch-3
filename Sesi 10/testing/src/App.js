import Home from './pages/Home';
import Users from './pages/Users';

import { Routes, Route } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <>
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='users' element={<Users/>} />
      </Routes>
    </>
  );
}

export default App;
