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



import React from 'react'
import { useState } from 'react';
// const product= this.props.products

function Cart(props) {
  const { image, title, price,category } = props;  
        var [count,setValue]=useState(0);
         function increament(){
             count++;
             setValue(count)
         }

         function decreament(){
          if(count>0){
            count--;
            setValue(count);
          }
      }
    
  return (
  <>
    <div className="product-sec">
      <div className="product-img-sec">
              <img src={image} alt="" className="product-img" />
      </div>
      <div className="product-content-sec">
          <div className="product-text-sec">
              <p>{title}</p>
              <p>{category}</p>
              <p>{price}</p>
          </div>
          <div className="product-button-sec">           
              <button className="button2">View Product</button>
              <button className="button2">Purchase</button>
              <div className='button-count-sec'>
                <button className="small-buttons" onClick={increament}>+</button>
                <p className='product-counter'>{count}</p>
                <button className="small-buttons" onClick={decreament}>-</button>
              </div>
          </div>
      </div>
    </div>
    </>
  )

  
}

export default Cart

