import React, { useEffect} from 'react'
import { useDispatch } from 'react-redux';
import {Default_ADD_TO_CART } from '../redux/actions/action';
import SingleProduct from './SingleProduct';

const Product = ({products}) => {
  console.log(products );
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