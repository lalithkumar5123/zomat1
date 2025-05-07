import React from 'react'
import "./Product.css";
import { Cartfile } from './Cartfile';

export const Product = ({ product,Cart , SetCart }) => {
  const name = product.name.length > 21 ? product.name.
  substring(0,20) + ".." : product.name
  
  const addCart = () =>{
    SetCart([...Cart,product])
  };
  const removeCart = () =>{
    SetCart(Cart.filter((c)=> c.id !== product.id));
  };
  return (
    <div className="product">
        <div className="img">
            <img src={product.pic} alt={product.name}/>
        </div>
        <div className="details">
        <h3>{name}</h3>
        <p>Price Rs: {product.amt}</p>
        {
          Cart.includes(product) ? 
         ( <button className='btnRemove' onClick={removeCart}>
            Remove from Cart</button>)
          :
           ( <button onClick={addCart}>Add to Cart</button>)
          
        }
        </div>
    </div>
  )
}
