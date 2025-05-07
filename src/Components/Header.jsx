import React from 'react'
import "./Header.css";
import { Link } from "react-router-dom"

export const Header = ({Cart}) => {
  return (
    <div className='navbar'>
        <div className='logo'>zomato</div>
        <ul>
            <li>
                <Link to={"/"}>Home</Link>
            </li>
            <li>
                <Link to={"/Cart"}> 
                <span className='Cart-count'>{Cart.length}</span> View Cart</Link>
            </li>
        </ul>
    </div>
  )
  
  
}
