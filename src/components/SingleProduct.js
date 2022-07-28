import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import {
  ADD_TO_CART,
  ADJUST_QNTY_ITEM,
  REMOVE_FROM_CART,
} from "../redux/actions/action";
import { NavLink } from "react-router-dom";

const SingleProduct = ({ prod,search}) => {
  
  const cartitem = useSelector((state) => state.cartreducer.carts);
  const products= useSelector((state) => state.cartreducer.productList);
  const dispatch = useDispatch();

  const addnadjustHandler = (item) => {
    toast(`${item.rname} Added To Cart`);
    products.map((item) => {
      if (item.id === prod.id) {
        prod.qnty = prod.qnty + 1;
      }
    });
    dispatch(ADD_TO_CART(item));
  };

  const addHandler = (item) => {
    toast(`${item.rname} Added To Cart`);
    products.map((item) => {
      if (item.id === prod.id) {
        prod.qnty = 1;
      }
    });
    dispatch(ADD_TO_CART(item));
  };

  const removefromcartHandler = (id) => {
    const item = cartitem.find((data) => data.id === id);
    toast(`${item.rname} Removed Successfully`);
    dispatch(REMOVE_FROM_CART(id));
  };
  const adjustQntyHandler = (item) => {
    toast(`${item.rname} Removed Successfully`);
    products.map((item) => {
      if (item.id === prod.id) {
        prod.qnty = prod.qnty - 1;
      }
    });
    dispatch(ADJUST_QNTY_ITEM(item));
  };

  return (
    <div className="product-card">
      <h6 className="heading">{prod.rname}</h6>
      <NavLink to={`/detail/${prod.id}`}>
        <img
          aria-hidden
          className="product-image"
          src={prod.imgdata}
          alt="image"
        />
      </NavLink>
      <br></br>
      <span className="price">Price :Rs.{prod.price}</span>
      <br></br>
      {cartitem.some((p) => p.id === prod.id) && prod.qnty > 0 ? (
        <div className="button">
          <button className="add-removes">
            <span
              className="dec"
              onClick={
                prod.qnty <= 1
                  ? () => removefromcartHandler(prod.id)
                  : () => adjustQntyHandler(prod)
              }
            >
              -
            </span>
            <span className="num">{prod.qnty}</span>
            <span className="inc" onClick={() => addnadjustHandler(prod)}>
              +
            </span>
          </button>
        </div>
      ) : prod.qnty > 1 ? (
        <div className="button">
          <button className="add-removes">
            <span
              className="dec"
              onClick={
                prod.qnty <= 1
                  ? () => removefromcartHandler(prod.id)
                  : () => adjustQntyHandler(prod)
              }
            >
              -
            </span>
            <span className="num">{prod.qnty}</span>
            <span className="inc" onClick={() => addnadjustHandler(prod)}>
              +
            </span>
          </button>
        </div>
      ) : (
        <div className="btn">
          <button className="add_cart" onClick={() => addHandler(prod)}>
            Add to Cart
          </button>
        </div>
      )}
      <br></br>
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
    </div>
  );
};

export default SingleProduct;
