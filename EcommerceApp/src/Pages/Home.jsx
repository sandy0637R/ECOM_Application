import React, { Component } from 'react'

export default class Home extends Component {
  constructor(){
    super()
    this.state={
         cart:[],
         wishlist:[],
         products:[
          {
            name:'Sandesh',
            price:20002,
          },
          {
            name:'Raut',
            price:5000,
          },
          {
            name:'Raut',
            price:5000,
          },
          {
            name:'Raut',
            price:5000,
          }
         ]
        }

      }

      addToCart(products){
        const cart=this.state.cart;
        cart.push(products);
        this.setState({cart:cart})
      }

      addToWishlist(products){
        const wishlist=this.state.wishlist;
        wishlist.push(products);
        this.setState({wishlist:wishlist});
      }
  render() {
    return (
      <>
        <div>{this.state.cart.length}</div>
        <div>{this.state.wishlist.length}</div>
        <div className='products'>
        {
          this.state.products.map((products,index)=>{
            return(
              <>
              <div className="product-sec" key={index}>
                <div className="product-img-sec">
                   <img src="" alt="" className="product-img"/>
                </div>
                <div className="product-content-sec">
                   <div className="product-text-sec">
                      <p>{products.name}</p>
                      <p></p>
                      <p>{products.price}</p>
                   </div>
                   <div className="product-button-sec">
                      <button className="button2 add-button" onClick={()=>this.addToCart(index)}>Add to Cart</button>
                      <button className="button2" onClick={()=>this.addToWishlist(index)}>View Product</button>
                      <div className='wishlist'>
                      <i class="fa-solid fa-heart"></i>
                      </div>
                   </div>
                </div>
              </div>
              </>
            )
          })
        }
        </div>
      </>
    )
  }
}

