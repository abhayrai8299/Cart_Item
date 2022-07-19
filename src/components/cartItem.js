import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    ADJUST_QNTY_ITEM,
  } from "../redux/actions/action";

const CartItem = () => {
     const data=useSelector((state) => state.cartreducer.carts);
    const [totalprice, setTotalprice] = useState(0);

    const dispatch = useDispatch();
    const addHandler = (item) => {
      dispatch(ADD_TO_CART(item));
    };
    const delHandler = (id) => {
      dispatch(REMOVE_FROM_CART(id));
    };
  
    const removeHandler = (item) => {
      dispatch(ADJUST_QNTY_ITEM(item));
    };
  
    const totalAmount = () => {
      let price = 0;
      data.map((item) => {
        price = item.price * item.qnty + price;
      });
      setTotalprice(price);
    };
  
    useEffect(() => {
      totalAmount();
    }, [totalAmount]);

  return (
    <>
      {data.length > 0 ? (
        <div>
          {data.map((item) => {
            return (
              <div className='cards'>
                <span className='heading' >{item.rname}</span>
                <br></br>
                <img className="images" src={item.imgdata} alt="image" />
                <br></br>
                <span className="prices">Price :Rs.{item.price}</span>
                <br></br>
                <div className="add-remove">
                  <span
                    className="dec"
                    onClick={
                      item.qnty <= 1
                        ? () => delHandler(item.id)
                        : () => removeHandler(item)
                    }
                  >
                    -
                  </span>
                  <span className="num">{item.qnty}</span>
                  <span className="inc" onClick={() => addHandler(item)}>
                    +
                  </span>
                </div>{" "}
                <span>Rs.{item.price}</span>
                  <span>*</span>
                  <span>{item.qnty}</span>=
                <span>
                    Rs.{item.price * item.qnty}
                    <br></br>
                  </span>
              </div>
            );
          })}
          <div>
            <hr />
            <span>SubTotal:</span>
            <br />
            {data.map((item) => {
              return (
                <>
                  <span>{item.rname}:</span>
                  <span>Rs.{item.price}</span>
                  <span>*</span>
                  <span>{item.qnty}</span>=
                  <span>
                    Rs.{item.price * item.qnty}
                    <br></br>
                  </span>
                </>
              );
            })}
            <br></br> <span>Grand Total:Rs.{totalprice}</span>
          </div>
        </div>
      ) : (
        "Cart is Empty"
      )}
    </>
  )
}

export default CartItem;