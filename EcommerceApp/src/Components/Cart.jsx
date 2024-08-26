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
// const product= this.props.products

function Cart({product}) {
    
    const {title,price,images}=product;
    const {name}=product.category;
    console.log("Cart component",product)
  return (
  <>
    <div className="product-sec">
      <div className="product-img-sec">
              <img src={images} alt="" className="product-img" />
      </div>
      <div className="product-content-sec">
          <div className="product-text-sec">
              <p>{title}</p>
              <p>{name}</p>
              <p>{price}</p>
          </div>
          <div className="product-button-sec">           
              <button className="button2">View Product</button>
              <div className='button-count-sec'>
                <button className=''>+</button>
                <p>0</p>
                <button className=''>-</button>
              </div>
          </div>
      </div>
    </div>
    </>
  )
}

export default Cart

