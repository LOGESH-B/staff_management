import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/home';
import NewUser from './pages/user/newuser';
import Newachiev from './pages/achivement/Newachiev';
import Login from './pages/user/login';
import AddAchivements from './pages/achivement/addachivement';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/newuser' element={<NewUser />} />
      <Route path='/user/newachivement/:id' element={<Newachiev />} />
      <Route path='/user/getalluser' element={<AddAchivements  />} />
      <Route path='/user/login' element={< Login/>} />
    </Routes>
    </>
  );
}

export default App;
