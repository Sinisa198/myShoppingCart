import React from 'react'
import ProductItem from '../Home/ProductItem'
import {useState} from 'react'

 const addCart = () => {

    const [items, setItems] = useState([])

    const addToCart = (name,price) =>{
        setItems((prevState) => [...prevState,{name, price}]);
    }


    const prod = [{
        id: '1',
        name: 'ROCKING HORSE',
        price: '$4994',
    },
      {
        id: '2',
        name: 'OLD DISK ROTARY PHONE',
        price: '$2',
      },
      {
        id: '3',
        name: 'FORD',
        price: '$4994',
      }]

  return 
}
  


export default addCart
