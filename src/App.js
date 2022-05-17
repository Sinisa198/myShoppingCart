import './App.css';
import navMenu from './components/navMenu/navMenu';
import Cart from './components/cart/cart';
import HomePage  from './components/Home/HomePage';


function App() {
  return (
    <div>
      <navMenu />
      <HomePage></HomePage>
    </div>
  );
}

export default App;
