import React, { Component } from "react";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import "./index.css";

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
  }

  addToWishlist = (products) =>  {
    const wishlist = this.state.wishlist;
    wishlist.push(products);
    this.setState({ wishlist: wishlist });
  }

  render() {
    return (
      <>
        <Navbar cart={this.state.cart} wishlist={this.state.wishlist} />
        <BrowserRouter>
          <Routes>
            {/* <Route path="" element={<Product/>} /> */}
            <Route
              path="/"
              element={<Home addToCart={this.addToCart} addToWishlist={this.addToWishlist} />}
            />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}
