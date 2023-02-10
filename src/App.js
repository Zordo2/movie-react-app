import logo from './logo.svg';
import './App.css';
import Movie from './Components/Movie';
import Home from './Components/Home';
import { Route, Routes } from 'react-router-dom';
import Item from './Components/Item';
import About from './Components/About';
import Nav from './Components/Nav';
import Login from './Components/Login';
import Auth from './Components/Auth';
function App() {
  return (
    <div>
      <Nav/>
      <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route element={<Auth/>}>
      <Route path='/movie' element={<Movie/>}/>
      <Route path='/item' element={<Item/>}>
      <Route path=':id' element={<Item/>}/>
      </Route>
      </Route>
      
      <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
