import { Link } from 'react-router-dom';
import React, { Component } from 'react';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
    };
  }

  componentDidMount() {
    // Retrieve the name from localStorage
    const name = localStorage.getItem('user'); // Assuming the key is 'userName'
    if (name) {
      const userObject = JSON.parse(name); // Parse the JSON string back into an object
      this.setState({ userName: userObject.name }); // Set the name from the object
    }
  }

  handleLogout = () => {
    const confirmLogout = window.confirm("Do you want to log out?");
    if (confirmLogout) {
      localStorage.removeItem('user'); // Clear the user data from localStorage
      this.setState({ userName: "" }); // Optionally clear the username from state
      // You can also redirect or perform additional logout actions here
    }
  }

  render() {
    return (
      <>
        <nav className="navbar">
          <Link to="/" className='link'>
            <div className="navbar-logo-sec">
              <h1 className="logo"><span style={{ color: 'red' }}>Ecom</span>Application</h1>
            </div>
          </Link>

          <div className='search-bar'>
            <div className='search-icon-sec'><i className="fa-solid fa-magnifying-glass search-icon"></i></div>
            <div className='search-input-sec'><input type="text" className='search-input' /></div>
          </div>

          <div className="navbar-button-sec">
            <Link to="cart" className='link'>
              <div className="cart">
                <p className="counter">{this.props.cart.length}</p>
                <i className="fa-solid fa-cart-shopping cart-icon"></i>
              </div>
            </Link>

            <Link to="wishlist" className='link'>
              <div className='wishlist-display'>
                <p className="wishlist-counter">{this.props.wishlist.length}</p>
                <i className="fa-solid fa-heart cart-icon"></i>
              </div>
            </Link>

            <Link to="register" className='link'>
              <h3 className='register'>{this.state.userName || 'SignUp'}</h3>
            </Link>
            <h3 className='register' style={{margin:"5px",textDecoration:"none"}}>/</h3>
            <h3 className='register' onClick={this.handleLogout} style={{ cursor: 'pointer' }}>LogOut</h3>
          </div>
        </nav>
      </>
    );
  }
}
