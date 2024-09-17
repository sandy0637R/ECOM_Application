import React, { Component } from "react";
import ProductCard from "../Components/ProductCard";

export default class HomeContainer extends Component {
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
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => this.setState({ products: json }));
  }

  componentDidMount() {
    console.log("Mount");
    this.getProducts();
  }

  render() {
    const { products } = this.state;
    // console.log(this.props)
    console.log(products)
    return (
      <>
        <div className="products">
          {products.map((products, index) => {
            return (
              <>
                <ProductCard
                  // img_src={products.images[1].replace(/['"]+/g, "")}
                  image={products.image}
                  title={products.title}
                  category_name={products.category}
                  price={products.price}
                  products={products}
                  index={index}
                  addToCart={this.props.addToCart}
                  addToWishlist={this.props.addToWishlist}
                />
              </>
            );
          })}
        </div>
      </>
    );
  }
}
