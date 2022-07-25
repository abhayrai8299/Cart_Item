import React, { useEffect} from 'react'
import { useDispatch } from 'react-redux';
import {Default_ADD_TO_CART } from '../redux/actions/action';
import Cardsdata from './CardData';

import CardData from './CardData';
import SingleProduct from './SingleProduct';
const Product = () => {
  const dispatch=useDispatch();

  const Handler=()=>{
    Cardsdata.map((item)=>{
      if(item.qnty>0)
      {
       dispatch(Default_ADD_TO_CART(item));
      }
    })
  }
  useEffect(()=>{
    Handler();
  },[Cardsdata])
  
  return (
    <div className='product'>
     {CardData.map((prod) => (
        <SingleProduct prod={prod} key={prod.id}  />       
    ))}
    </div>
  )
}

export default Product