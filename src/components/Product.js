import React, { useEffect} from 'react'
import { useDispatch} from 'react-redux';
import {Default_ADD_TO_CART } from '../redux/actions/action';
import SingleProduct from './SingleProduct';

const Product = ({productItem}) => {


  const dispatch=useDispatch();
  const Handler=()=>{
    productItem.map((item)=>{
      if(item.qnty>0)
      {
       dispatch(Default_ADD_TO_CART(item));
      }
    })
  }
  useEffect(()=>{
    Handler();
  },[productItem])
  

  return (
    <div className='product'>
     {productItem.map((prod) => (
        <SingleProduct prod={prod} key={prod.id} productItem={productItem} />       
    ))}
    </div>
  )
}

export default Product