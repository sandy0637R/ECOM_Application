import { Link, NavLink, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const Navbar = ({ cart, wishlist }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("userData"));
    if (storedUser && storedUser.isLoggedIn) {
      setIsLoggedIn(true);
      setUsername(storedUser.name); // Change 'fullname' to 'name' based on your registration code
    }
  }, []);

  const handleLogout = () => {
    const storedUser = JSON.parse(localStorage.getItem("userData"));
    if (storedUser) {
      storedUser.isLoggedIn = false;
      localStorage.setItem("userData", JSON.stringify(storedUser));

      setIsLoggedIn(false);
      setUsername("");

      navigate("/login");
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    // Implement search logic or redirect as needed
  };

  const handleCart = () => {
    if (isLoggedIn) {
      navigate("/cart");
    } else {
      navigate("/register");
    }
  };

  const handleWishlist = () => {
    if (isLoggedIn) {
      navigate("/wishlist");
    } else {
      navigate("/register");
    }
  };

  return (
    <nav className="navbar">
      <Link to="/" className='link'>
        <div className="navbar-logo-sec">
          <h1 className="logo"><span style={{ color: 'red' }}>Ecom</span> Application</h1>
        </div>
      </Link>

      <form className='search-bar' onSubmit={handleSearchSubmit}>
        <div className='search-icon-sec'>
          <i className="fa-solid fa-magnifying-glass search-icon"></i>
        </div>
        <div className='search-input-sec'>
          <input 
            type="text" 
            className='search-input' 
            value={searchQuery} 
            onChange={handleSearchChange} 
            placeholder="Search..."
          />
        </div>
      </form>

      <div className="navbar-button-sec">
        <div className="cart" onClick={handleCart}>
          <p className="counter">{cart.length}</p>
          <i className="fa-solid fa-cart-shopping cart-icon"></i>
        </div>

          <div className='wishlist-display' onClick={handleWishlist}>
            <p className="wishlist-counter">{wishlist.length}</p>
            <i className="fa-solid fa-heart cart-icon"></i>
          </div>

        {isLoggedIn ? (
          <>
            <li className="nav-item">
              <NavLink to="/profile" className="nav-link">
                Welcome, {username}
              </NavLink>
            </li>
            <li className="nav-item" style={{ cursor: "pointer" }} onClick={handleLogout}>
              <span className="nav-link">Logout</span>
            </li>
          </>
        ) : (
          <>
            <li className="nav-item">
              <NavLink to="/login" className="nav-link">Login</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/register" className="nav-link">Sign Up</NavLink>
            </li>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
