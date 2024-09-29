// import React, { Component } from 'react'

// export default class Cart extends Component {


//     constructor(props){
//         super(props)

//         this.props={
//             products:[],
//         }
//     }

//     render() {
//         const { products } = this.props;
//         console.log( "Cart component",{products})


//     return (
//       <>

//         {/* {this.state.cart.map((products)=>(
                    
//                     <div key={products.id}>
//                         <h1>cart</h1>
//                         <p>{products.title}</p>
//                     </div>                  
//         ))} */}

//         {this.state.products.map((products) => {
//             return (
//               <>
//                 <div className="product-sec" key={products.id}>
//                     <p>{products.title}</p>
                  
//                 </div>
//               </>
//             );
//           })}
//       </>
//     )
//   }
// }



import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../Store/action'; // Import your actions

function Cart(props) {
  const { image, title, price, category } = props;
  const dispatch = useDispatch();
  
  // Get the cart from Redux state
  const cart = useSelector(state => state.cart);
  const cartItem = cart.find(item => item.title === title);
  
  // Check if the item exists in the cart and get its quantity
  const count = cartItem ? cartItem.quantity : 0;

  const increment = () => {
    dispatch({ type: 'ADD_TO_CART', payload: { title } }); // Dispatch add action
  };

  const decrement = () => {
    if (count > 1) {
      dispatch({ type: 'REMOVE_FROM_CART', payload: { title } }); // Decrement quantity by 1
    } else if (count === 1) {
      handleRemove(); // If quantity is 1, remove item completely
    }
  };

  const handleRemove = () => {
    dispatch(removeFromCart({ title })); // Dispatch remove action
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

          {/* quantity section */}
          <div className='button-count-sec'>
            <button className="small-buttons" onClick={increment}>+</button>
            <p className='product-counter'>{count}</p>
            <button className="small-buttons" onClick={decrement}>-</button>
          </div>
          {/* quantity section end */}
        </div>
      </div>
    </div>
  );
}

export default Cart;


