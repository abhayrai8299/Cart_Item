import React,{useCallback, useEffect} from "react";
import { Badge } from "react-bootstrap";
import { TbShoppingCart } from "react-icons/tb";
import {useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {FcShop} from "react-icons/fc"
import {AiOutlineSearch} from "react-icons/ai"
import Cardsdata from "./CardData";



const Header = ({searchvalue,setsearchvalue
  ,setProducts}) => {
  const data = useSelector((state) => state.cartreducer.carts);
  
  const debounce=(func)=>{
    let timer;
    return function(...args){
        if(timer) clearTimeout(timer)
        timer=setTimeout(()=>{
            func(...args);
        },2000);
    }
  }

  const handleGetProduct = () => {
    setProducts(Cardsdata);
  };
  const searchProduct = (value) => {
    let val = value.toLowerCase()
    if (val) {
      let filtered = Cardsdata.filter(product => {
        return product.rname.toLowerCase().includes(val);
      });
      setProducts(filtered);
    } else {
      setsearchvalue
      ("");
      handleGetProduct();
    }
  };
 const handlesearchvalue =(event) => {
 setsearchvalue
 (event.target.value);
  searchProduct(event.target.value);
};
useEffect(() => {
  handleGetProduct();
}, []);

const optimisedver=useCallback(debounce(handlesearchvalue),[])
  return (
    <div className="navbar">
      <div className="container">
        <div className="header">
          <div className="header_item">
            <FcShop />
            <NavLink className="cart" to="/">Foody Food</NavLink>
            <NavLink className="cart order_page" to="/orderpage">Order History</NavLink>
            <NavLink className="cart admin_page" to="/admin">Admin</NavLink>
            <div className="input"> <input className="search_bar" onChange={optimisedver} searchvalue={searchvalue} ></input><span className="search-icon"><AiOutlineSearch /></span></div>
           
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
