import React from 'react'
import { useSelector } from 'react-redux';

const OrderPage = ({price}) => {

    const data = useSelector((state) => state.cartreducer.orderHistory);
    const cartdata=useSelector((state) => state.cartreducer.carts);
    console.log(data );
  return (
    <div>
       <h3>My Orders</h3>
       {data.map((item) => {
        {Object.keys(item).map((it)=>{
            console.log(item.orderDate);
            return (
                <div>
                <span>{item.orderDate}</span>
                </div>
            )
        })}
      })}
    </div>
  )
}

export default OrderPage