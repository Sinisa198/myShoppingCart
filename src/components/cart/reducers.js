export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";

const addProductToCart = (productsInCart, state) => {
    
    console.log("adding product", productsInCart)
    const updatedCart = [...state.cart];
    const updatedItemIndex = updatedCart.findIndex(
      item => item.id === productsInCart.id
    );
      if (updatedItemIndex < 0) {
        updatedCart.push({ ...productsInCart, quantity: 1 });
      } else {
        const updatedItem = {
          ...updatedCart[updatedItemIndex]
        };
        updatedItem.quantity++;
        updatedCart[updatedItemIndex] = updatedItem;
      }
    
      return { ...state, cart: updatedCart };
    };


    export const shopReducer = (state, action) => {
        switch (action.type) {
          case ADD_PRODUCT:
            return addProductToCart(action.productsInCart, state);
      
          
          default:
            return state;
        }
      };