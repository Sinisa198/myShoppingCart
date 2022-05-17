import logo from './logo.svg';
import './App.css';
import CartItem from './cart/CartItem';

function App() {
  return (
    <form>
      <div>
        <h1 className="title">Hello to my shopping cart</h1>
        <CartItem />
      </div>
    </form>
  );
}

export default App;
