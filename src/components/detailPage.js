import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailPage = (productItem,setProductItem) => {

  const [data, setData] = useState([]);
  const { id } = useParams();

  const cardData = () => {
    let data = productItem.filter((item) => {
      return item.id == id;
    });
    setData(data);
  };
  useEffect(() => {
    cardData();
  }, [id]);
  return (
    <div>
      <h2>Detail Page</h2>
      {data.map((item) => {
        return (
          <div className="product-card">
            <h6 className="heading">{item.rname}</h6>
            <div className="product_details">
              <img src={item.imgdata} alt="" />
              <br></br>
              <span className="price">Price :Rs.{item.price}</span>
              <br></br>
              <span className="address">Food Type: {item.address}</span>
              <br />
              <span className="somedata">Order: {item.somedata}</span>
              <br />
              <span className="rating">Rating:{item.rating}</span>
              <br></br>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DetailPage;
