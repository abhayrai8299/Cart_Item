import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Default_ADD_TO_CART } from '../redux/actions/action';
import SingleProduct from './SingleProduct';

const Product = () => {
   const products=useSelector((state)=>state.cartreducer.productList)
  const dispatch=useDispatch();
  const Handler=()=>{
    products.map((item)=>{
      if(item.qnty>0)
      {
       dispatch(Default_ADD_TO_CART(item));
      }
    })
  }
  useEffect(()=>{
    Handler();
  },[products])
  

  return (
    <div className='product'>
     {products.map((prod) => (
        <SingleProduct prod={prod} key={prod.id} />       
    ))}
    </div>
  )
}

export default Product