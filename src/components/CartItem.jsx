import React, { useContext } from 'react';

import CartContext from '../store/cartContex';

const CartItem = ({ item, remove }) => {
  return (
    <div className='row cart__wrapper'>
      <div key={item.id} className='cart__item'>
        <div className='cart__item-body-image'>
          <img src={item.image} alt='' className='cart__item-img' />
        </div>
        <div className='cart__item-details'>
          <span className='cart__item-name'>{item.name}</span>
          <span className='cart__item-info'>Amount: {item.amount}</span>
        </div>
        <div className='cart__item-button'>
          <a
            className='btn btn--sm'
            href=''
            onClick={(event) => remove(event, item)}
          >
            REMOVE FROM CART
          </a>
        </div>
        <div className='cart__item-price'>
          <span className='cards__price'>Price : ${item.price} </span>
        </div>
      </div>
    </div>
  );
};
export default CartItem;
