import React from 'react'
import { Badge } from 'react-bootstrap'
import {TbShoppingCart} from 'react-icons/tb'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='navbar'>
         <div className="container">
        <div className="header">
          <div>
            <span>Foody Food</span>
          </div>
          <NavLink className="cart" to="/cart">
            <TbShoppingCart />
            <Badge>3</Badge>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Header;