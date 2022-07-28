import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Modal.css";

const Edititem = ({ edititem, setEdititem }) => {
  const products = useSelector((state) => state.cartreducer.productList);
  const navigate = useNavigate();
  const handlechange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setEdititem({ ...edititem, [name]: value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
  };
  const onProceed = () => {
    console.log(edititem);
    products.map((it) =>
      it.id === edititem.id
        ? ((it.rname = edititem.food_name),
          (it.address = edititem.food_type),
          (it.price = edititem.price),
          (it.qnty = edititem.quantity),
          (it.rating = edititem.rating))
        : it
    );
    navigate("/admin");
  };
  const onCancel = () => {
    navigate("/admin");
  };
  const onHome=()=>{
    navigate("/");
  }
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn"></div>
        <div className="title">
          <h2>Please Edit the Item</h2>
          <div className="body">
            <form onSubmit={submitHandler}>
              Food Name
              <input
                type="text"
                value={edititem.food_name}
                onChange={handlechange}
                name="food_name"
                id="food_name"
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
                type="number"
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
                type="number"
                value={edititem.quantity}
                onChange={handlechange}
                name="quantity"
              />
              <br />
            </form>
          </div>
          <div className="footer">
            <button onClick={onProceed}>Proceed</button>
            <button onClick={onCancel}>Cancel</button>
            <button onClick={onHome}>Home</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edititem;
