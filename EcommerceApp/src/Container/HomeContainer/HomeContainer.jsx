import React, { Component } from "react";
import { connect } from "react-redux";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { fetchProducts, addToCart, addToWishlist } from "../../Store/action"; // Adjust path as necessary

class HomeContainer extends Component {
  componentDidMount() {
    this.props.fetchProducts();  // Dispatch the FETCH_PRODUCTS action to trigger the saga
  }

  render() {
    const { products, addToCart, addToWishlist } = this.props;
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

// Map state to props
const mapStateToProps = (state) => ({
  products: state.products,  // Access products from Redux store
});

const mapDispatchToProps = {
  fetchProducts,  // Dispatch the action to trigger saga
  addToCart,
  addToWishlist,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);

