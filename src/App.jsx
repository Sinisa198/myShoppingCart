import './App.css';
import navBar from './components/navBar/navBar';
import Cart from './components/cart/cartItem';
import {Routes, Route, Link, NavLink, Switch} from 'react-router-dom';
import HomePage  from './components/Home/HomePage';
import Footer from './components/Footer/Footer';
import { Decrement, Increment} from './components/Home/HomePage'


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element ={<HomePage />} />
       <Route path='/cartItem' element = {<Cart />} />
      </Routes>
    </div>
  );
}

export default App;