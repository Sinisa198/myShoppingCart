import { React, useContext, useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import favorite from "../../assets/images/favorite.png";
import favoriteBorder from "../../assets/images/favorite-border.png";
import CartContext from "../../store/CartContex";
import FavoriteContext from "../../store/FavoriteContex";

const ProductItem = ({ name, id, price, image }) => {
  const [product, setProducts] = useState(1);

  const notify = () => toast("You have added a product to the cart");
  const notifyFavorite = () =>
    toast("You have added a product to the favorite");

  const cartCtx = useContext(CartContext);
  const addToCartHandler = (amount) => {
    amount.preventDefault();
    notify();
    cartCtx.addItem({
      id: id,
      name: name,
      price: price,
      image: image,
      amount: product,
    });
  };

  const favoriteCtx = useContext(FavoriteContext);
  const addToFavoriteHandler = (amount) => {
    amount.preventDefault();
    notifyFavorite();
    favoriteCtx.addFavoriteItem({
      id: id,
      name: name,
      price: price,
      image: image,
      amount: product,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };

  const handleDecremente = () => {
    if (product > 1) setProducts((product) => Number(product) - 1);
  };
  const handleIncremente = () => {
    if (product < 20) setProducts((product) => Number(product) + 1);
  };
  return (
    <div className="col-xl-4 col-lg-4 col-md-6">
      <div className="cards__item">
        <div className="cards__item-body">
          <div className="cards__item-body-image">
            <img src={image} alt={image} className="cards__item-img" />
          </div>
          <span className="cards__item-body-name">{name}</span>
          <span className="cards__item-body-price">${price}</span>
        </div>
        <div className="cards__item-footer">
          <div className="quantity">
            <input
              className="qty"
              type="number"
              step="1"
              min="1"
              onChange={submitHandler}
              value={product}
            />
            <div className="quantity__button">
              <button
                className="quantity-add js-inc quantity-button"
                onClick={handleIncremente}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z" />
                </svg>
              </button>
              <button
                className="quantity-remove js-dec quantity-button"
                min="0"
                onClick={handleDecremente}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M400 288h-352c-17.69 0-32-14.32-32-32.01s14.31-31.99 32-31.99h352c17.69 0 32 14.3 32 31.99S417.7 288 400 288z" />
                </svg>
              </button>
            </div>
          </div>
          <a className="add-to-cart btn" href="" onClick={addToCartHandler}>
            ADD TO CART
          </a>
          <ToastContainer />

          <div className="heart">
            <img
              src={favorite}
              alt="heart"
              className="heart-icon heart__full"
              onClick={addToFavoriteHandler}
            />
            <img
              src={favoriteBorder}
              alt="heart"
              className="heart-icon heart__empty"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductItem;
