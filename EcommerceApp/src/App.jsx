import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Cart from "./Components/Cart";
import Navbar from "./Components/Navbar";
import "./index.css";
import Wishlist from "./Components/Wishlist";

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
    const { cart } = this.state;
    console.log({cart})

    const { wishlist} =this.state;
    console.log({wishlist})
    
    return (
      <>
       
        <Navbar cart={this.state.cart} wishlist={this.state.wishlist} />
          <Routes>
            {/* <Route path="" element={<Product/>} /> */}
            <Route
              path="/"
              element={<Home addToCart={this.addToCart} addToWishlist={this.addToWishlist} />}
            />
            <Route
              path="login"
              element={<Login/>}
            />
            <Route
              path="cart"
              element={
                this.state.cart.map((cart,index)=>(
                 <Cart key={index} product={cart}/>
                ))
             }
            />
            <Route
              path="wishlist"
              element={
                this.state.wishlist.map((wishlist,index)=>(
                 <Wishlist key={index} product={wishlist}/>
               ))
             }
            />
          </Routes>
          
         
      </>
    );
  }
}
