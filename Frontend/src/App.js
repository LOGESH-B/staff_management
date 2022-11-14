import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/home';
import NewUser from './pages/user/newuser';
import Newachiev from './pages/achievement/Newachiev';
import Login from './pages/user/login';
import AddAchivements from './pages/achievement/addachievement';
import Profile from './pages/home/profile';

function App() {
  return (
    <>
    <Routes>
      <Route path='/*' element={<Home />} />
      <Route path='/user/newuser' element={<NewUser />} />
      <Route path='/user/newachievement/:id' element={<Newachiev />} />
      <Route path='/user/getalluser' element={<AddAchivements  />} />
      <Route path='/user/login' element={< Login/>} />
      <Route path='/user/viewProfile/:id' element={<Profile />} />
    </Routes>
    </>
  );
}

export default App;
