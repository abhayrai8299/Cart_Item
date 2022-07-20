import React from 'react'
import CardData from './CardData';
import SingleProduct from './SingleProduct';
const Product = () => {
  return (
    <div className='product'>
       <div className="contain">
     {CardData.map((prod) => (
        <SingleProduct prod={prod} key={prod.id}  />       
    ))}
    </div>
    </div>
  )
}

export default Product