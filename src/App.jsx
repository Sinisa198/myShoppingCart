import { Routes, Route } from 'react-router-dom';
import useState from 'react'
import './App.css';
import Cart from './components/cart/Cart';
import HomePage from './components/home/Home';
import CartProvider from './store/cartProvider';
import Checkout from './components/Checkout';


export function App() {
  return (
    <div>
      <CartProvider>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;

