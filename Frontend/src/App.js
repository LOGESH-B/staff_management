import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/home';
import NewUser from './pages/user/newuser';
import Newachiev from './pages/achivement/Newachiev';
import Login from './pages/user/login';
import AddAchivements from './pages/achivement/addachivement';
import Profile from './pages/home/profile';
import Signup from './pages/user/signup';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/newuser' element={<NewUser />} />
      <Route path='/user/newachivement/:id' element={<Newachiev />} />
      <Route path='/user/getalluser' element={<AddAchivements  />} />
      <Route path='/user/login' element={< Login/>} />
      <Route path='/user/signup' element={< Signup/>} />
      <Route path='/user/viewProfile/:id' element={<Profile />} />
    </Routes>
    </>
  );
}

export default App;
