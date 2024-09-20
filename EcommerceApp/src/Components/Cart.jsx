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
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../Store/action'; // Import your actions

function Cart(props) {
  const { image, title, price, category } = props;
  const dispatch = useDispatch();

  // Local state for item count
  const [count, setCount] = React.useState(1); // Start with a count of 1

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(prevCount => prevCount - 1); // Prevent going below 1
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
          <button className="button2" onClick={handleRemove}>Remove from Cart</button>
          <div className='button-count-sec'>
            <button className="small-buttons" onClick={increment}>+</button>
            <p className='product-counter'>{count}</p>
            <button className="small-buttons" onClick={decrement}>-</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;

