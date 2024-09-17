import React from 'react'
import Wishlist from '../Components/Wishlist';

const WishlistContainer = ({product}) => {
    console.log("CartContainer component",product)
  return (
    <div>
      <Wishlist
        image={product.image}
        title={product.title}
        price={product.price}
        category={product.category}
      />
    </div>
  )
}

export default WishlistContainer
