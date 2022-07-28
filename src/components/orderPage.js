import React from "react";
import { useSelector } from "react-redux";

const OrderPage = () => {
  const data = useSelector((state) => state.cartreducer.orderHistory);
  const sortType=useSelector((state)=>state.cartreducer.sort)
  const sortedData=data.sort((a,b)=>{
    const reversed=(sortType==='desc')?-1:1;
    return reversed*a.orderDate.localeCompare(b.orderDate);
  });
  return (
    <div>
      {sortedData.length?<> <h3 className="order_heading">My Orders</h3>
      {sortedData.map((item) => {
        let flag = false;
        return Object.keys(item).map((it) => {
          if (typeof item[it] === "object") {
            return (
              <div>
                <span className="item_heading">{item[it].rname}</span>
                <br></br>
                <img
                  className="img-order"
                  src={item[it].imgdata}
                  aria-hidden
                  alt="image"
                />
                <span>Qty: {item[it].qnty}</span>
                <span>*</span>
                <span>Price: Rs.{item[it].price}</span>
                <br></br>
              </div>
            );
          } else if (typeof item[it] !== "object" && flag === false) {
            flag = true;
            return (
              <div className="product-card">
                <div>
                  <span>OrderID: {item.orderID}</span> || 
                <span> OrderDate: {item.orderDate}</span>
                <br />
                <span>Total Amount To be Paid:Rs.{item.TotalAmount}</span>
                <hr />
                </div>
              </div>
            );
          }
        });
      })}</>:<div className="order_heading"><span>No Order Yet</span></div>}
     
      
    </div>
  );
};
export default OrderPage;
