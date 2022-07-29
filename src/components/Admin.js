import React from "react";
import { Button } from "react-bootstrap";

import { NavLink } from "react-router-dom";

const Admin = ({ edititem, setEdititem, setItem,productItem}) => {
  const editHandle = (item) => {
    setItem(item);
    setEdititem({
      ...edititem,
      id: item.id,
      food_name: item.rname,
      food_type: item.address,
      price: item.price,
      quantity: item.qnty,
      rating: item.rating,
    });
  };

  return (
    <div>
      <div className="admin">Admin Page</div>
      <table>
        <tr>
          <th>Food Name</th>
          <th>Food Type</th>
          <th> Price</th>
          <th>Rating</th>
          <th>Quantity</th>
          <th>Edit</th>
        </tr>
        {productItem.map((item) => {
          return (
            <>
              <tr>
                <td className="row">{item.rname}</td>
                <td className="row">{item.address}</td>
                <td className="row">{item.price}</td>
                <td className="row">{item.rating}</td>
                <td className="row">{item.qnty}</td>
                <NavLink to="/edit">
                  <Button
                    className="edit_item"
                    onClick={() => editHandle(item)}
                  >
                    Edit
                  </Button>
                </NavLink>
              </tr>
            </>
          );
        })}
      </table>
    </div>
  );
};

export default Admin;
