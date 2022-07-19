import React from 'react'
import { Badge } from 'react-bootstrap'
import {TbShoppingCart} from 'react-icons/tb'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const data=useSelector((state) => state.cartreducer.carts);
  return (
    <div className='navbar'>
         <div className="container">
        <div className="header">
          <div>
            <span>Foody Food</span>
          </div>
          <NavLink className="cart" to="/cart">
            <TbShoppingCart />
            <Badge>{data.length}</Badge>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Header;