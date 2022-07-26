import React,{useCallback, useEffect} from "react";
import { Badge } from "react-bootstrap";
import { TbShoppingCart } from "react-icons/tb";
import {useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {FcShop} from "react-icons/fc"
import {AiOutlineSearch} from "react-icons/ai"
import { debounce } from "lodash";
import Cardsdata from "./CardData";



const Header = ({products,searchValue,setSearchValue,setProducts}) => {
  console.log(searchValue);
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
    console.log("Ssad",value);
    let keyWord = value
    if (keyWord) {
      let filtered = Cardsdata.filter(product => {
        return product.rname.includes(keyWord);
      });
      console.log('sdasd', filtered);
      setProducts(filtered);
    } else {
      setSearchValue("");
      handleGetProduct();
    }
  };
  console.log(products)

 const handlesearchvalue =(event) => {
  console.log(event.target.value)
 setSearchValue(event.target.value);
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
            <div className="input"> <input className="search_bar" onChange={optimisedver} searchValue={searchValue} ></input><span className="search-icon"><AiOutlineSearch /></span></div>
           
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
