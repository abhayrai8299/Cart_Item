import React, { useState } from "react";
import "./Modal.css";
const Edititem = ({Item, setItem}) => {
    const [edititem, setEdititem] = useState({
        food_name: "",
        food_type: "",
        price: "",
        rating: "",
        quantity: "",
      });
    console.log(Item);
  console.log({...edititem,food_type:Item.rname});
  setEdititem({
    ...edititem,
    food_name:Item.rname,
    // food_type: Item.address,
    // price: Item.price,
    // quantity: Item.qnty,
    // rating: Item.rating, 
});

  const handlechange = (e) => {
    const name=e.target.name;
    const value=e.target.value;
  };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn"></div>
        <div className="title">
          <h2>Please Edit the Item</h2>
          <div className="body">
            <form>
              Food Name
              <input
                type="text"
                value={edititem.food_name}
                onChange={handlechange}
                name="food_name"
              />
              <br />
              Food Type
              <input
                type="text"
                value={edititem.food_type}
                onChange={handlechange}
                name="food_type"
              />
              <br />
              Price{" "}
              <input
                type="text"
                value={edititem.price}
                onChange={handlechange}
                name="price"
              />
              <br />
              Rating
              <input
                type="text"
                value={edititem.rating}
                onChange={handlechange}
                name="rating"
              />
              <br />
              Qunatity
              <input
                type="text"
                value={edititem.quantity}
                onChange={handlechange}
                name="quantity"
              />
              <br />
            </form>
          </div>
          <div className="footer">
            <button>Proceed</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edititem;
