import React, { Component } from "react";
import { connect } from "react-redux";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { setProducts, addToCart, addToWishlist } from "../../Store/action"; // Adjust path as necessary

class HomeContainer extends Component {
  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    console.log("Get Products");
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        this.props.setProducts(json); // Dispatch products to the store
      });
  }

  render() {
    const { products, addToCart, addToWishlist } = this.props;
    console.log(products);
    return (
      <>
        <div className="products">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              title={product.title}
              category_name={product.category}
              price={product.price}
              product={product}
              addToCart={addToCart}
              addToWishlist={addToWishlist}
            />
          ))}
        </div>
      </>
    );
  }
}

// Map state and actions to props
const mapStateToProps = (state) => ({
  products: state.products,
});

const mapDispatchToProps = {
  setProducts,
  addToCart,
  addToWishlist,
};

// Connect the component to the Redux store
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);

