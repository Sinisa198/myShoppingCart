import './App.css';
import navMenu from './components/navMenu/navMenu';
import Cart from './components/cart/cart';
import HomePage  from './components/Home/HomePage';
import Footer from './components/Footer/Footer';
import { decrement, increment} from './components/Home/HomePage'


function App() {
  return (
    <div>
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
