import React, { Component, Suspense } from "react";
import ImageSlider from "../../Components/ImageSlider/ImageSlider";
import Loader from "../../Components/Loader/Loader";

// Lazy load the HomeContainer component
const HomeContainer = React.lazy(() => import("../../Container/HomeContainer/HomeContainer"));

export default class Home extends Component {
  render() {
    return (
      <>
        <ImageSlider />
        <Suspense fallback={<Loader/>}>
          <HomeContainer 
            addToCart={this.props.addToCart}
            addToWishlist={this.props.addToWishlist}
          />
        </Suspense>
      </>
    );
  }
}
