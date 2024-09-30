import React from 'react';
import { useSelector } from 'react-redux'; // Import useSelector to access Redux store
import Cart from '../../Components/Cart/Cart'; // Assuming Cart is your cart item component
import { Link } from 'react-router-dom';

const CartContainer = () => {
  // Get cart products from Redux state
  const cartProducts = useSelector((state) => state.cart);

  console.log("CartContainer component", cartProducts);

  // Calculate total price
  const calculateTotalPrice = () => {
    return cartProducts.reduce((total, product) => total + product.price, 0).toFixed(2);
  };

  return (
    <div className='container'>
      <div className='cart-container'>
        {cartProducts.length > 0 ? (
          cartProducts.map((product, index) => (
            <Cart
              key={index}
              image={product.image}
              title={product.title}
              price={product.price}
              category={product.category}
            />
          ))
        ) : (
          <p>Your cart is empty.</p> // Message when cart is empty
        )}
      </div>
      {cartProducts.length > 0 && (
        <div className='purchase-section'>
          <h3>Total Price: ${calculateTotalPrice()}</h3>
          <Link to="/transaction"><button className='purchase-button'>Proceed to Checkout</button></Link>
        </div>
      )}
    </div>
  );
};

export default CartContainer;
