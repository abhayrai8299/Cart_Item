import React,{useState,useEffect} from 'react'

const ProductPrice = ({data,quantity}) => {
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
  )
}

export default ProductPrice