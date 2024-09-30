import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Transaction = () => {
  const cartProducts = useSelector((state) => state.cart);
  const navigate = useNavigate();

  // Calculate total price
  const totalPrice = cartProducts.reduce((acc, product) => {
    return acc + product.price * product.quantity; // Assuming each product has a quantity property
  }, 0);

  const handleContinueShopping = () => {
    navigate('/'); // Navigate back to the home or product page
  };

  return (
    <div className='transaction-container'>
      <h1>Transaction Receipt</h1>
      <div className='bill-details'>
        <h2>Bill Details</h2>
        {cartProducts.length > 0 ? (
          cartProducts.map((product, index) => (
            <div key={index} className='bill-item'>
              <p>{product.title} (x{product.quantity})</p>
              <p>${(product.price * product.quantity).toFixed(2)}</p>
            </div>
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
      <div className='total-price'>
        <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
      </div>
      <button className='continue-button' onClick={handleContinueShopping}>
        Continue Shopping
      </button>
      <button>
        Purchase
      </button>
    </div>
  );
};

export default Transaction;
