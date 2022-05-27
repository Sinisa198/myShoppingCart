import {Routes, Route, NavLink, Switch} from 'react-router-dom';

import './App.css';
import Cart from './components/Cart/cartItem';
import HomePage  from './components/Home/homePage';
import CartProvider from './store/cartProvider';
import Checkout from './components/checkout';

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
