import React from 'react';
import { useSelector } from 'react-redux'; // Import useSelector to access Redux store
import Wishlist from '../../Components/Wishlist/Wishlist';

const WishlistContainer = () => {
  // Get wishlist products from Redux state
  const wishlistProducts = useSelector((state) => state.wishlist);

  console.log("WishlistContainer component", wishlistProducts);

  return (
    <div className='container'>
      <div className='cart-container'>
        {wishlistProducts.length > 0 ? (
          wishlistProducts.map((product, index) => (
            <Wishlist
              key={index}
              image={product.image}
              title={product.title}
              price={product.price}
              category={product.category}
            />
          ))
        ) : (
          <p>Your wishlist is empty.</p> // Message when wishlist is empty
        )}
      </div>
    </div>
  );
};

export default WishlistContainer;
