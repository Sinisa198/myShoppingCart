import React from "react";
import NavBar from "../navBars/NavBar";
import FavoriteItem from "./FavoriteItem";
import { useContext } from "react";
import CartContext from "../../store/CartContex";

const Favorite = () => {
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;

  const removeItemFromCartHandler = (event, item) => {
    event.preventDefault();
    cartCtx.removeItem(item.id);
  };
  return (
    <div>
      <h1 className="favorite-title">FAVORITE</h1>
      <NavBar />
      {items.map((item) => {
        return (
          <FavoriteItem
            key={item.id}
            item={item}
            remove={removeItemFromCartHandler}
          />
        );
      })}
    </div>
  );
};

export default Favorite;
