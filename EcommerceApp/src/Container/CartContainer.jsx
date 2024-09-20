import React from 'react';
import { useSelector } from 'react-redux';
import Cart from '../Components/Cart';

const CartContainer = () => {
  const cartProducts = useSelector((state) => state.cart);

  console.log("CartContainer component", cartProducts);

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
          <p>Your cart is empty</p>
        )}
      </div>
    </div>
  );
};

export default CartContainer;
