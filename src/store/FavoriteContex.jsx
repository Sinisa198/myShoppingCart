import React from "react";

const FavoriteContext = React.createContext({
  favoriteItems: [],
  totalAmount: 0,
  addFavoriteItem: (item) => {},
  removeFromFavorite: (id) => {},
});

export default FavoriteContext;
