import React from "react";
import Product from "./Pages/Product";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import { createBrowserRouter , RouterProvider } from "react-router-dom";
import Navbar from "./Components/Navbar";

function App(){
  const router=createBrowserRouter(
    [
      {
        path:"/",
        element:<><Navbar/><Home/></>
      },
      {
        path: "/login",
        element: <><Navbar/><Login/></>
      },
    ]
  )
  return(
    <>
     {/* <Product/> */}
     <RouterProvider router={router}/>
    </>
  )
}

export default App