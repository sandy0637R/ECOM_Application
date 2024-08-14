import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <nav className="navbar">
           <div className="navbar-logo-sec">
               <h1 className="logo"><span style={{color:'red'}}>Ecom</span>Application</h1>
           </div>
           <div className="navbar-button-sec">
               <div className="cart">
                   <p className="counter">0</p>
                   <img src="src/assets/cart.png" alt=""  className="navbar-img" />
               </div>
               <Link to="/"><button className="button1" style={{margin:"0px 20px 0px 0px"}}>Wishlist:0</button></Link>
               <Link to="/login"><button className="button1">Login</button></Link>
           </div>
        </nav>
    </>
  )
}

export default Navbar
