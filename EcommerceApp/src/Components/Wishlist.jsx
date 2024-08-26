import React from 'react'

function Wishlist({product}) {

const {title,price,images}=product;
    // const {name}=product.category;
    console.log("Cart component",product)
  return (
   
    <div className="product-sec">
      <div className="product-img-sec">
              <img src={images} alt="" className="product-img" />
      </div>
      <div className="product-content-sec">
          <div className="product-text-sec">
              <p>{title}</p>
              {/* <p>{name}</p> */}
              <p>{price}</p>
          </div>
          <div className="product-button-sec">           
              <button className="button2">View Product</button>
              <div className='button-count-sec'>
                <button className=''>+</button>
                <p>0</p>
                <button className=''>-</button>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Wishlist


