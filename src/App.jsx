import './App.css';
import Cart from './components/cart/cartItem';
import {Routes, Route, Link, NavLink, Switch} from 'react-router-dom';
import HomePage  from './components/Home/HomePage';
import CartProvider from './store/CartProvider';
 
export function App() {
  return (
    <div>
      <CartProvider>

      <Routes>
        <Route path='/' element ={<HomePage />} />
       <Route path='/cartItem' element = {<Cart />} />
      </Routes>

      </CartProvider>
    </div>
  );
}

export default App;
