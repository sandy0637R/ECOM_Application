import React from 'react'
import Cart from '../Components/Cart'
const CartContainer = ({product}) => {
    console.log("CartContainer component",product)
  return (
    
    <div className='container'>
     <div className='cart-container'>
      <Cart
        image={product.image}
        title={product.title}
        price={product.price}
        category={product.category}
      />
     </div>
    </div>
  )
}

export default CartContainer

