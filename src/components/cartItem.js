import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cardsdata from "./CardData";
import { ToastContainer,toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADJUST_QNTY_ITEM,
} from "../redux/actions/action";
import ProductPrice from "./ProductPrice";
import { NavLink } from "react-router-dom";

const CartItem = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.cartreducer.carts);
  const [quantity, setquantity] = useState(0);

  const addHandler = (item) => {
    toast(`${item.rname} Item Quantity Increased Successfully`);
    Cardsdata.map((data) => {
      if (data.id === item.id) {
        data.qnty = data.qnty + 1;
      }
    });
    setquantity(quantity + 1);
    dispatch(ADD_TO_CART(item));
  };
  const delHandler = (id) => {
    const item = Cardsdata.find((data) => data.id === id);
    toast(`${item.rname} Removed Successfully`);
    Cardsdata.map((data) => {
      if (data.id === id) {
        data.qnty = data.qnty - 1;
      }
    });
    dispatch(REMOVE_FROM_CART(id));
  };
  const removeHandler = (item) => {
    toast(`${item.rname} Item Qunatity Decreased Successfully`);
    Cardsdata.map((data) => {
      if (data.id === item.id) {
        data.qnty = data.qnty - 1;
      }
    });
    setquantity(quantity + 1);
    dispatch(ADJUST_QNTY_ITEM(item));
  };
  return (
    <>
      {data.length > 0 ? (
        <>
          <div className="card">
            {data.map((item) => {
              return (
                <div className="card-item">
                  <span className="heading">{item.rname}</span>
                  <br></br>
                  <img
                    aria-hidden
                    className="images"
                    src={item.imgdata}
                    alt="image"
                  />
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
          </div>
          <ProductPrice data={data} quantity={quantity} />
        </>
      ) : (
        <>
          <div className="cart-empty">
            <h3>Cart Is Empty</h3>
            <button>
              <NavLink className="cart-link" to="/">
                See New Things
              </NavLink>
            </button>
          </div>
        </>
      )}
              <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default CartItem;
