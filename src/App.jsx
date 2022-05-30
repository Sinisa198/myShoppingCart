import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Cart from './components/Cart/Cart';
import HomePage  from './components/Home/HomePage';
import './App.css';
import CartProvider from './store/cartProvider';
import Checkout from './components/Checkout';
import NavBar from "./components/NavBar";

const  App = () => {
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

