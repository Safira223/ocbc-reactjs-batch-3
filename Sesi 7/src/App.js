import { Routes, Route, NavLink } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Profile from './pages/Profile';
import ProfileDetails from './pages/ProfileDetails';
import NotFound from './pages/NotFound';
import ProtectedPage from './pages/ProtectedPage';

function App() {
  const activeStyle = {
    fontWeight: 700,
    color: 'yellow'
  }
  const inactiveStyle = {
    color: 'green'
  }

  const checkIsActive = ({isActive}) => isActive ? activeStyle : inactiveStyle;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <ul>
          <li>
            <NavLink to={"/"} style={checkIsActive}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/profile"} style={checkIsActive}>Profile</NavLink>
          </li>
          {/* <li>
            <NavLink to={"/*"} style={checkIsActive}>Not Founde</NavLink>
          </li> */}
          <li>
            <NavLink to={"/protected"} style={checkIsActive}>Protected</NavLink>
          </li>
        </ul>
        
      </header>

      <Routes>
        <Route path="" element={<Home />} />

        {/* 
        ada 2 cara untuk me-render route nya :
        1. parent route dengan element -> berguna ketika ingin melihat detail dari data tertentu yang sifatnya kompleks
            contoh : User details berikut dengan transaksi, informasi, user, dsb.

        2. parent route tanpa element -> berguna sebagai navigasi utama
            contoh : route utamanya user, lalu berisi beberapa child route:
                  "/users"      -> User list
                  "/users/:id"  -> User details bedasarkan ID nya 
        */}

        <Route path="profile" element={<Profile />}>
          {/* nested routes */}
          {/* route di dalam route */}
          {/* child routes */}

          {/* kita harus tambahkan <Outlet /> di dalam parent element untuk menampilkan  */}
          <Route path ="asal" element={<ProfileDetails/>}/>
          <Route path=":name" element={<Profile />} />
        </Route>

        {/* routing dengan dynamic parameters */}
        {/* <Route path="profile/:name" element={<Profile />} /> */}
        {/* sintaks: namaParams */}
        
        {/* routing dengan star segment (wildcard) */}
        <Route path="protected" element={<ProtectedPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </div>
  );
}

export default App;
