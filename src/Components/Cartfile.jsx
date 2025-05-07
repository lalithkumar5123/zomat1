import React, { useEffect, useState } from 'react'
import './Cart.css';

export const Cartfile  = ({Cart,SetCart}) => {
  const [total,SetTotal] = useState(0);
  useEffect(() => {
    SetTotal(Cart.reduce((acc ,Curr) => acc + parseInt(Curr.amt),0));

  },[Cart] );
  return (
  <>
  <h1 className="Cart-heading">Cart Products</h1>
  
   <div className="Cart-container">
    {
      Cart.map((product) => (
        <div className="Cart-product" key={product.id}>
        <div className="img">
          <img src={product.pic} alt="image" />
        </div>
        <div className="Cart-product-details">
          <h3>{product.name}</h3>
          <p>Price Rs: {product.amt}</p>
        </div>
      </div>
      ))
        
      
    }
   
    </div>
   
    <h2 className="Cart-amt">Total Amount Rs: {total}</h2>
  </>
  )
}
