import React from "react";
import NavBar from "../navBars/NavBar";
import FavoriteItem from "./FavoriteItem";
import { useContext } from "react";
import CartContext from "../../store/CartContex";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Favorite = () => {
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  const removeFavorite = () => toast("You remove item from favorite");
  const cartItemRemoveHandler = (event, item) => {
    event.preventDefault();
    removeFavorite();
    cartCtx.removeItem(item.id);
  };
  return (
    <div>
      <ToastContainer />
      <h1 className="favorite-title">FAVORITE</h1>
      <NavBar />
      {items.map((item) => {
        return (
          <FavoriteItem
            key={item.id}
            item={item}
            remove={cartItemRemoveHandler}
          />
        );
      })}
    </div>
  );
};

export default Favorite;
