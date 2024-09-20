// import React, { Component } from "react";
// import ProductCard from "../Components/ProductCard";

// export default class HomeContainer extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       cart: [],
//       wishlist: [],
//       products: [],
//     };
//   }

//   getProducts() {
//     console.log("Get Products");
//     fetch("https://fakestoreapi.com/products")
//       .then((res) => res.json())
//       .then((json) => this.setState({ products: json }));
//   }

//   componentDidMount() {
//     console.log("Mount");
//     this.getProducts();
//   }

//   render() {
//     const { products } = this.state;
//     // console.log(this.props)
//     console.log(products)
//     return (
//       <>
//         <div className="products">
//           {products.map((products, index) => {
//             return (
//               <>
//                 <ProductCard
//                   // img_src={products.images[1].replace(/['"]+/g, "")}
//                   image={products.image}
//                   title={products.title}
//                   category_name={products.category}
//                   price={products.price}
//                   products={products}
//                   index={index}
//                   addToCart={this.props.addToCart}
//                   addToWishlist={this.props.addToWishlist}
//                 />
//               </>
//             );
//           })}
//         </div>
//       </>
//     );
//   }
// }

import React, { Component } from "react";
import { connect } from "react-redux";
import ProductCard from "../Components/ProductCard";
import { setProducts, addToCart, addToWishlist } from "../Store/action"; // Adjust path as necessary

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

