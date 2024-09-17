// Lazy loading module
// folder structure
// details
// pagination
// cart 

import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Cart from "./Components/Cart";
import Navbar from "./Components/Navbar";
import "./index.css";
import Wishlist from "./Components/Wishlist";
import CartContainer from "./Container/CartContainer";
import WishlistContainer from "./Container/WishlistContainer";
import Register from "./Components/Register";

// import { createBrowserRouter , RouterProvider } from "react-router-dom";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      cart: [],
      wishlist: [],
    };
  }

  addToCart = (products) => {
    const cart = this.state.cart;
    cart.push(products);
    this.setState({ cart: cart });
    // this.setState((prevState) => ({
    //   cart: [...prevState.cart, products],
    // }));
  }

  addToWishlist = (products) =>  {
    const wishlist = this.state.wishlist;
    wishlist.push(products);
    this.setState({ wishlist: wishlist });
  }

  render() {
    const { cart, wishlist } = this.state;
    
    return (
      <>
       
        <Navbar cart={cart} wishlist={wishlist} />
          <Routes>
            {/* <Route path="" element={<Product/>} /> */}
            <Route
              path="/"
              element={<Home addToCart={this.addToCart} addToWishlist={this.addToWishlist} />}
            />
            <Route
              path="register"
              element={<Register/>}
            />
            <Route
              path="login"
              element={<Login/>}
            />
            <Route
              path="cart"
              element={
                this.state.cart.map((cart,index)=>(
                 <CartContainer key={index} product={cart}/>
                ))
             }
            />
            <Route
              path="wishlist"
              element={
                this.state.wishlist.map((wishlist,index)=>(
                 <WishlistContainer key={index} product={wishlist}/>
               ))
             }
            />

{/* <Route
              path="products/:id"
              element={
                this.state.wishlist.map((wishlist,index)=>(
                 <Wishlist key={index} product={wishlist}/>
               ))
             }
            /> */}
          </Routes>
          
         
      </>
    );
  }
}
