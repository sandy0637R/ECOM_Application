import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeFromWishlist, addToCart } from '../Store/action'; // Import your actions

function Wishlist(props) {
  const { image, title, price, category } = props;
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1); // Manage quantity for adding to cart

  const handleRemove = () => {
    dispatch(removeFromWishlist({ title })); // Remove item from wishlist
  };

  const handleAddToCart = () => {
    if (quantity > 0) {
      dispatch(addToCart({ image, title, price, category, quantity })); // Add item to cart
      handleRemove(); // Optionally remove from wishlist after adding to cart
    }
  };


  return (
    <div className="product-sec">
      <div className="product-img-sec">
        <img src={image} alt={title} className="product-img" />
      </div>
      <div className="product-content-sec">
        <div className="product-text-sec">
          <p>{title}</p>
          <p>{category}</p>
          <p>${price.toFixed(2)}</p>
        </div>
        <div className="product-button-sec">
          <button className="button2">View Product</button>
          <button className='button2' onClick={handleAddToCart}>Add to Cart</button>
        </div>
        <div className='product-button-sec'>
          <button className='button2' onClick={handleRemove}>Remove from Wishlist</button>
        </div>
      </div>
    </div>
  );
}

export default Wishlist;
