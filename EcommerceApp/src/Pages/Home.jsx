import React, { Component } from "react";
import HomeContainer from "../Container/HomeContainer";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  render() {
    

    return (
      <>
        <HomeContainer 
          addToCart={this.props.addToCart}
          addToWishlist={this.props.addToWishlist}/>
      </>
    );
  }
}
