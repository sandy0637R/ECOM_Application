
import { Link } from 'react-router-dom'
import React, { Component } from 'react'

export default class Navbar extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <>
      <nav className="navbar">
         <Link to="/" className='link'>
         <div className="navbar-logo-sec">
             <h1 className="logo"><span style={{color:'red'}}>Ecom</span>Application</h1>
         </div>
         </Link>

         <div className='search-bar'>
          <div className='search-icon-sec'><i class="fa-solid fa-magnifying-glass search-icon"></i></div>
          <div className='search-input-sec'><input type="text" className='search-input'/></div>
         </div>
         <div className="navbar-button-sec">

             <Link to="cart" className='link'>
             <div className="cart">
                 <p className="counter">{this.props.cart.length}</p>
                 <i class="fa-solid fa-cart-shopping cart-icon" ></i>
             </div>
             </Link>

             <Link to="wishlist" className='link'>
                 {/* <button className="button1" style={{margin:"0px 20px 0px 0px"}}>Wishlist:{this.props.wishlist.length}</button> */}
                <div className='wishlist-display'>
                <p className="wishlist-counter">{this.props.wishlist.length}</p>
                <i class="fa-solid fa-heart cart-icon"></i>
                </div>
             </Link>

             <Link to="register" className='link'>
              <h3 className='register'>SignUp</h3>
             </Link>
             
         </div>
      </nav>
  </>
    )
  }
}
