import React from "react";
import NavBar from "../navBars/NavBar";
import FavoriteItem from "./FavoriteItem";
import { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FavoriteContext from "../../store/FavoriteContex";

const Favorite = () => {
  const favoriteCtx = useContext(FavoriteContext);
  const { items } = favoriteCtx;
  const favoriteItemRemoveHandler = (event, item) => {
    event.preventDefault();
    favoriteCtx.removeFavoriteItem(item.id);
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
            remove={favoriteItemRemoveHandler}
          />
        );
      })}
    </div>
  );
};

export default Favorite;
