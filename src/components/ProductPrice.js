import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Circles } from "react-loader-spinner";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TO_ORDER } from "../redux/actions/action";

const ProductPrice = ({ data, quantity ,prices,setPrice}) => {
  const [totalprice, setTotalprice] = useState(0);
  const [loading, setLoading] = useState(false);
  const [disable, setDisable] = useState(false);
   
  const cartItem= useSelector((state) => state.cartreducer.carts);
  const dispatch=useDispatch();

  const totalAmount = () => {
    let price = 0;
    data.map((item) => {
      price = item.price * item.qnty + price;
    });
    setTotalprice(price);
  };
  const history=useNavigate();

  const orderHandler=(cartItem)=>{
    setLoading(true)
    setDisable(true);
    dispatch(ADD_TO_ORDER(cartItem,totalprice))
    toast(`Order Placed Successfully`);
    setTimeout(()=>{
      history("/orderpage");
      setLoading(false)
    setDisable(false);
    },500)
  }
  useEffect(() => {
    totalAmount();
  }, [quantity]);

  setPrice(totalprice)


  console.log(prices);
  return (
    <>
    <div>
      <hr />
      <span className="sub-total">SubTotal:</span>
      <br />
      {data.map((item) => {
        return (
          <div>
            <span className="item-name">-{item.rname}:</span>
            <span className="item-price">Rs.{item.price}</span>
            <span className="multi">*</span>
            <span className="qnty">{item.qnty}</span>=
            <span className="multiply">
              Rs.{item.price * item.qnty}
              <br></br>
            </span>
          </div>
        );
      })}
      <br></br><span className="grand-total">Grand Total:Rs.{totalprice}</span>
      <button
            disabled={disable}
            onClick={()=>orderHandler(cartItem)}
            className="add_cart butn"
            type="button"
          >
            {loading === false ? (
              "Order Placed"
            ) : (
              <Circles color="#00BFFF" height={10} width={25} />
            )}
          </button>
    </div>
    <ToastContainer
        position="top-center"
        autoClose={200}
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

export default ProductPrice;
