import React from "react";
import FavoriteContex from "./FavoriteContex";
import { useReducer } from "react";

const FavoriteProvider = (props) => {
  const [favoriteState, dispatchFavoriteAction] = useReducer(
    favoriteReducer,
    defaultFavoriteState
  );

  const addItemToFavoriteHandle = (item) => {
    dispatchFavoriteAction({ type: "ADD", item });
  };
  const removeFromFavoriteHandler = (id) => {
    dispatchFavoriteAction({ type: "REMOVE", id });
  };

  const favoriteContext = {
    items: favoriteState.items,
    totalAmount: favoriteState.totalAmount,
    addFavoriteItem: addItemToFavoriteHandle,
    removeFavoriteItem: removeFromFavoriteHandler,
  };

  return (
    <FavoriteContex.Provider value={favoriteContext}>
      {props.children}
    </FavoriteContex.Provider>
  );
};

export default FavoriteProvider;
