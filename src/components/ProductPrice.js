import React, { useState, useEffect } from "react";

const ProductPrice = ({ data, quantity }) => {
  const [totalprice, setTotalprice] = useState(0);

  const totalAmount = () => {
    let price = 0;
    data.map((item) => {
      price = item.price * item.qnty + price;
    });
    setTotalprice(price);
  };

  useEffect(() => {
    totalAmount();
  }, [quantity]);
  return (
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
      <br></br> <span className="grand-total">Grand Total:Rs.{totalprice}</span>
    </div>
  );
};

export default ProductPrice;
