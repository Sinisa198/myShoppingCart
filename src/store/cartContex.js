import React from 'react'

const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {
        // items.filter(item => item.id != id);
    }
})

export default CartContext;