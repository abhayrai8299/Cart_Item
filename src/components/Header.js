import React from "react";
import { Badge } from "react-bootstrap";
import { TbShoppingCart } from "react-icons/tb";
import {useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {FcShop} from "react-icons/fc"



const Header = () => {
  const data = useSelector((state) => state.cartreducer.carts);
  return (
    <div className="navbar">
      <div className="container">
        <div className="header">
          <div>
            <FcShop />
            <NavLink className="cart" to="/">Foody Food</NavLink>
          </div>
          <NavLink className="cart" to="/cart">
            <TbShoppingCart />
            <Badge>{data.length}</Badge>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
