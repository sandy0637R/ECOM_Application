// // Lazy loading module
// // folder structure
// // details
// // pagination
// // cart 

// import React, { Component } from "react";
// import { Route, Routes } from "react-router-dom";
// import Login from "./Pages/Login";
// import Home from "./Pages/Home";
// import Cart from "./Components/Cart";
// import Navbar from "./Components/Navbar";
// import "./index.css";
// import Wishlist from "./Components/Wishlist";
// import CartContainer from "./Container/CartContainer";
// import WishlistContainer from "./Container/WishlistContainer";
// import Register from "./Components/Register";
// import { useSelector,useDispatch } from "react-redux";
// import { increment,decrement } from "./action";

// // import { createBrowserRouter , RouterProvider } from "react-router-dom";

// export default class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       cart: [],
//       wishlist: [],
//     };
//   }

//   addToCart = (products) => {
//     const cart = this.state.cart;
//     cart.push(products);
//     this.setState({ cart: cart });
//     // this.setState((prevState) => ({
//     //   cart: [...prevState.cart, products],
//     // }));
//   }

//   addToWishlist = (products) =>  {
//     const wishlist = this.state.wishlist;
//     wishlist.push(products);
//     this.setState({ wishlist: wishlist });
//   }

//   // Redux
//    count=useSelector((state)=>state.count)
//    dispatch=useDispatch()
//    incrementation=()=>{dispatch(increment())}
//    decrementation=()=>{dispatch(decrement())}
  

  
//   render() {
//     const { cart, wishlist } = this.state;
    
//     return (
//       <>
       
//         <Navbar cart={cart} wishlist={wishlist} />
//           <Routes>
//             {/* <Route path="" element={<Product/>} /> */}
//             <Route
//               path="/"
//               element={<Home addToCart={this.addToCart} addToWishlist={this.addToWishlist} count={count} 
//                        increment={incrementation} decrement={decrementation}/>}
//             />
//             <Route
//               path="register"
//               element={<Register/>}
//             />
//             <Route
//               path="login"
//               element={<Login/>}
//             />
//             <Route
//               path="cart"
//               element={
//                 this.state.cart.map((cart,index)=>(
//                  <CartContainer key={index} product={cart}/>
//                 ))
//              }
//             />
//             <Route
//               path="wishlist"
//               element={
//                 this.state.wishlist.map((wishlist,index)=>(
//                  <WishlistContainer key={index} product={wishlist}/>
//                ))
//              }
//             />

// {/* <Route
//               path="products/:id"
//               element={
//                 this.state.wishlist.map((wishlist,index)=>(
//                  <Wishlist key={index} product={wishlist}/>
//                ))
//              }
//             /> */}
//           </Routes>
          
         
//       </>
//     );
//   }
// }

import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import {  addToCart, addToWishlist } from "./Store/action"; // Update this import

const LazyHome = lazy(() => import("./Pages/Home"));
const LazyRegister = lazy(() => import("./Components/Register"));
const LazyLogin = lazy(() => import("./Pages/Login"));
const LazyCart = lazy(() => import("./Container/CartContainer"));
const LazyWishlist = lazy(() => import("./Container/WishlistContainer"));
const LazyProfile = lazy(()=>import("./Pages/Profile"))

const App = () => {
  const cart = useSelector((state) => state.cart); // Get cart from Redux state
  const wishlist = useSelector((state) => state.wishlist); // Get wishlist from Redux state
  const dispatch = useDispatch();

  
  return (
    <>
      <Navbar cart={cart} wishlist={wishlist} />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <LazyHome
                addToCart={(product) => dispatch(addToCart(product))} // Dispatch add to cart
                addToWishlist={(product) => dispatch(addToWishlist(product))} // Dispatch add to wishlist
              />
            </Suspense>
          }
        />
        <Route
          path="register"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <LazyRegister />
            </Suspense>
          }
        />
        <Route
          path="login"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <LazyLogin />
            </Suspense>
          }
        />
        <Route
          path="cart"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <LazyCart products={cart} /> {/* Pass entire cart */}
            </Suspense>
          }
        />
        <Route
          path="wishlist"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <LazyWishlist products={wishlist} /> {/* Pass entire wishlist */}
            </Suspense>
          }
        />
        <Route
          path="profile"
          element={
          <Suspense fallback={<div>Loading...</div>}>
            <LazyProfile/>
          </Suspense>
          }
        />
      </Routes>
    </>
  );
};

export default App;
