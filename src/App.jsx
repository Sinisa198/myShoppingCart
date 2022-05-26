import { Routes, Route, Link, NavLink, Switch } from 'react-router-dom';

import './App.css';
import Cart from './components/cart/cartItem';
import HomePage from './components/Home/HomePage';
import CartProvider from './store/CartProvider';
import Checkout from './components/Checkout';

export function App() {
  return (
    <div>
      <CartProvider>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/cartItem' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
