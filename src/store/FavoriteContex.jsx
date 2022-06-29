import React from "react";

const FavoriteContext = React.createContext({
  favoriteItems: [],
  addFavoriteItem: (item) => {},
  removeFromFavorite: (id) => {},
});

export default FavoriteContext;
