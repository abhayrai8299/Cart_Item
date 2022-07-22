import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

import CardData from './CardData';
import SingleProduct from './SingleProduct';
const Product = () => {
//    const initialState=JSON.parse(localStorage.getItem("Cart"))|| []
//    const [cartitems,setcartitems]=useState(initialState);

//    console.log(cartitems)
//  useEffect(()=>{
//      localStorage.setItem("Cart",JSON.stringify(CardData));
// },[CardData]);


//  console.log("fsfsfdfdfdfdfdfdff",initialState);
  return (
    <div className='product'>
     {CardData.map((prod) => (
        <SingleProduct prod={prod} key={prod.id}  />       
    ))}
    </div>
  )
}

export default Product