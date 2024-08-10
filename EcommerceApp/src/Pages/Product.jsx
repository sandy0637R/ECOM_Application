import React from "react";
import { useState } from "react";

function Product(){
    var [count,setValue]=useState(0);
    function increament(){
        count++;
        setValue(count)
    }
    return(
        <>
          <main className="main">
            <nav className="navbar">
                <div className="navbar-logo-sec">
                    <h1 className="logo"><span style={{color:'red'}}>Ecom</span>Application</h1>
                </div>
                <div className="navbar-button-sec">
                    <div className="cart">
                        <p className="counter">{count}</p>
                        <img src="src/assets/cart.png" alt=""  className="navbar-img" />
                    </div>
                    <button className="button1">Request a Demo</button>
                </div>
            </nav>
            <section className="products-main">
                <div className="products">

                    <div className="product-sec">
                        <div className="product-img-sec">
                            <img src="src/assets/product1.webp" alt="" className="product-img"/>
                        </div>
                        <div className="product-content-sec">
                            <div className="product-text-sec">
                               <p>
                                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                 Ut, aliquid velit in blanditiis at inventore perferendi. 
                               </p>
                            </div>
                            <div className="product-button-sec">
                               <button className="button2 add-button" onClick={increament}>Add To Cart</button>
                               <button className="button2" >View Product</button>
                            </div>
                        </div>
                    </div>

                    <div className="product-sec">
                        <div className="product-img-sec">
                            <img src="src/assets/product2.jpeg" alt="" className="product-img"/>
                        </div>
                        <div className="product-content-sec">
                            <div className="product-text-sec">
                               <p>
                                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                 Ut, aliquid velit in blanditiis at inventore perferendi. 
                               </p>
                            </div>
                            <div className="product-button-sec">
                               <button className="button2 add-button"onClick={increament}>Add to Cart</button>
                               <button className="button2">View Product</button>
                            </div>
                        </div>
                    </div>

                    <div className="product-sec">
                        <div className="product-img-sec">
                            <img src="src/assets/product3.jpeg" alt="" className="product-img"/>
                        </div>
                        <div className="product-content-sec">
                            <div className="product-text-sec">
                               <p>
                                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                 Ut, aliquid velit in blanditiis at inventore perferendi. 
                               </p>
                            </div>
                            <div className="product-button-sec">
                               <button className="button2 add-button"onClick={increament}>Add to Cart</button>
                               <button className="button2">View Product</button>
                            </div>
                        </div>
                    </div>

                    <div className="product-sec">
                        <div className="product-img-sec">
                            <img src="src/assets/product4.jpeg" alt="" className="product-img"/>
                        </div>
                        <div className="product-content-sec">
                            <div className="product-text-sec">
                               <p>
                                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                 Ut, aliquid velit in blanditiis at inventore perferendi. 
                               </p>
                            </div>
                            <div className="product-button-sec">
                               <button className="button2 add-button"onClick={increament}>Add to Cart</button>
                               <button className="button2">View Product</button>
                            </div>
                        </div>
                    </div>

                </div>


                <div className="products">

                    <div className="product-sec">
                        <div className="product-img-sec">
                            <img src="src/assets/product5.jpg" alt="" className="product-img"/>
                        </div>
                        <div className="product-content-sec">
                            <div className="product-text-sec">
                               <p>
                                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                 Ut, aliquid velit in blanditiis at inventore perferendi. 
                               </p>
                            </div>
                            <div className="product-button-sec">
                               <button className="button2 add-button"onClick={increament}>Add to Cart</button>
                               <button className="button2">View Product</button>
                            </div>
                        </div>
                    </div>

                    <div className="product-sec">
                        <div className="product-img-sec">
                            <img src="src/assets/product6.jpg" alt="" className="product-img"/>
                        </div>
                        <div className="product-content-sec">
                            <div className="product-text-sec">
                               <p>
                                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                 Ut, aliquid velit in blanditiis at inventore perferendi. 
                               </p>
                            </div>
                            <div className="product-button-sec">
                               <button className="button2 add-button"onClick={increament}>Add to Cart</button>
                               <button className="button2">View Product</button>
                            </div>
                        </div>
                    </div>

                    <div className="product-sec">
                        <div className="product-img-sec">
                            <img src="src/assets/product7.jpeg" alt="" className="product-img"/>
                        </div>
                        <div className="product-content-sec">
                            <div className="product-text-sec">
                               <p>
                                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                 Ut, aliquid velit in blanditiis at inventore perferendi. 
                               </p>
                            </div>
                            <div className="product-button-sec">
                               <button className="button2 add-button"onClick={increament}>Add to Cart</button>
                               <button className="button2">View Product</button>
                            </div>
                        </div>
                    </div>

                    <div className="product-sec">
                        <div className="product-img-sec">
                            <img src="src/assets/product8.jpeg" alt="" className="product-img"/>
                        </div>
                        <div className="product-content-sec">
                            <div className="product-text-sec">
                               <p>
                                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                 Ut, aliquid velit in blanditiis at inventore perferendi. 
                               </p>
                            </div>
                            <div className="product-button-sec">
                               <button className="button2 add-button"onClick={increament}>Add to Cart</button>
                               <button className="button2">View Product</button>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
          </main>
        </>
    )
}

export default Product;