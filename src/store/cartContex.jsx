import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  addFavorite: (item) => {},
  removeItem: (id) => {},
  removeFromFavorite: (id) => {},
});

export default CartContext;
