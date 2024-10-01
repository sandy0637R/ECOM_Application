import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeFromWishlist, addToCart } from '../../Store/action'; // Import your actions
import "./Wishlist.css";

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
    <div className="wishlist-sec">
      <div className="wishlist-img-sec">
        <img src={image} alt={title} className="wishlist-img" />
      </div>
      <div className="wishlist-content-sec">
        <div className="wishlist-text-sec">
          <p className="wishlist-title">{title}</p>
          <div className='wishlist-sub-sec'>
            <p>{category}</p>
            <p className="wishlist-price">${price.toFixed(2)}</p>
          </div>
        </div>
        <div className="wishlist-button-sec">
          <button className="wishlist-button">View Product</button>
        </div>
        <div className="wishlist-button-sec">
          <button className="wishlist-remove-button" onClick={handleRemove}>Remove</button>
          <button className="wishlist-addtocart" onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Wishlist;
