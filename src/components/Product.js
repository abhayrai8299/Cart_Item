import React from 'react'
import CardData from './CardData';
import SingleProduct from './SingleProduct';
const Product = () => {
  return (
    <div className='product'>
     {CardData.map((prod) => (
        <SingleProduct prod={prod} key={prod.id}  />       
    ))}
    </div>
  )
}

export default Product