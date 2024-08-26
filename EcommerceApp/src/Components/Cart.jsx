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

// //  render() {
// //     const { cart } = this.props; // Receive cart data from props
// //    console.log("cart component",cart)
// //     return (
// //       <div>
// //         {/* Render cart items */}
// //         {cart.map((products) => (
// //           <div key={products.id}>
// //             <p>{products.title}</p>
// //             {/* Other cart item details */}
// //           </div>
// //         ))}
// //       </div>
// //     );
// //   } 
// // }

import React from 'react'
// const product= this.props.products

function Cart({product}) {
    // const {products} = this.props;
    // console.log({products})
    // console.log(product)
    const {title}=product;
    console.log("Cart component",product)
  return (
    <div >
       <p>{title}</p>
       
    </div>
  )
}

export default Cart

