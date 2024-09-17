import React from 'react'
import { useState } from 'react';

function Wishlist(props) {
  const { image, title, price,category } = props;

  var [count,setValue] = useState(0);

  function increament(){
    count++;
    setValue(count);
  }
  
  function decreament(){
    if(count>0){
      count--;
      setValue(count);
    }
  }
  return (
   
    <div className="product-sec">
      <div className="product-img-sec">
              <img src={image} alt="" className="product-img" />
      </div>
      <div className="product-content-sec">
          <div className="product-text-sec">
              <p>{title}</p>
              <p>{category}</p>
              <p>{price}</p>
          </div>
          <div className="product-button-sec">           
              <button className="button2">View Product</button>
              <button className='button2'>Purchase</button>
              <div className='button-count-sec'>
                <button className='small-buttons' onClick={increament}>+</button>
                <p className='product-counter'>{count}</p>
                <button className='small-buttons' onClick={decreament}>-</button>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Wishlist


