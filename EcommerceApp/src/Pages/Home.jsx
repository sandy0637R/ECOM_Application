import React, { Component } from "react";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      wishlist: [],
      products: [],
    };
  }

  getProducts() {
    console.log("Get Products");
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((json) => this.setState({ products: json }));
  }

  componentDidMount() {
    console.log("Mount");
    this.getProducts();
  }

  render() {
    // console.log(this.props)
    return (
      <>
        <div className="products">
          {this.state.products.map((products, index) => {
            return (
              <>
                <div className="product-sec" key={index}>
                  <div className="product-img-sec">
                    <img src={products.images} alt="" className="product-img" />
                  </div>
                  <div className="product-content-sec">
                    <div className="product-text-sec">
                      <p>{products.title}</p>
                      <p>{products.category.name}</p>
                      <p>{products.price}</p>
                    </div>
                    <div className="product-button-sec">
                      <button
                        className="button2 add-button"
                        onClick={() => this.props.addToCart(products)}
                      >
                        Add to Cart
                      </button>
                      <button className="button2">View Product</button>
                      <div
                        className="wishlist"
                        onClick={() => this.props.addToWishlist(products)}
                      >
                        <i className="fa-solid fa-heart"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </>
    );
  }
}
