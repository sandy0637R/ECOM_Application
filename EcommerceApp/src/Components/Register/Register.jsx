import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState(""); // New state for phone number
  const [address, setAddress] = useState(""); // New state for address
  const [error, setError] = useState(""); 
  const [success, setSuccess] = useState(""); 

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Basic validation
    if (!name || !email || !password || !phone || !address) {
      setError("Please fill in all fields.");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Password strength validation
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    // Store signup data in localStorage
    const userData = {
      name,
      email,
      password,
      phone,
      address,
      isLoggedIn: true,
    };

    try {
      localStorage.setItem("userData", JSON.stringify(userData));
      console.log("Signup data stored successfully:", userData);
      setName("");
      setEmail("");
      setPassword("");
      setPhone("");
      setAddress("");
      setSuccess("Signup successful! Redirecting to home page...");

      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (err) {
      console.error("Error storing signup data in localStorage:", err);
      setError("Error saving your data. Please try again.");
    }
  };

  return (
    <>
      <div className='login-page'>
        <form className='login-main' onSubmit={handleSubmit}>
          <h1 className='login-heading'>Register</h1>
          {error && <div className="error-message">{error}</div>} 
          {success && <div className="success-message">{success}</div>} 
          
          <div className='login-sec'>
            <label htmlFor="userName" className='login-label'>Enter Your Name:</label>
            <input
              name='name'
              value={name}
              onChange={(e) => setName(e.target.value)} 
              type="text" 
              className='login-input' 
              id='userName'
            />
          </div>
          
          <div className='login-sec'>
            <label htmlFor="userEmail" className='login-label'>Enter Your Email:</label>
            <input
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
              type="email" 
              className='login-input' 
              id='userEmail'
            />
          </div>
          
          <div className='login-sec'>
            <label htmlFor="userPassword" className='login-label'>Enter Your Password:</label>
            <input
              name='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
              type="password" 
              className='login-input' 
              id='userPassword'
            />
          </div>
          
          <div className='login-sec'>
            <label htmlFor="userPhone" className='login-label'>Enter Your Phone Number:</label>
            <input
              name='phone'
              value={phone}
              onChange={(e) => setPhone(e.target.value)} 
              type="tel" 
              className='login-input' 
              id='userPhone'
            />
          </div>
          
          <div className='login-sec'>
            <label htmlFor="userAddress" className='login-label'>Enter Your Address:</label>
            <input
              name='address'
              value={address}
              onChange={(e) => setAddress(e.target.value)} 
              type="text" 
              className='login-input' 
              id='userAddress'
            />
          </div>

          <div className='login-sec'>
            <input 
              type="submit" 
              className='button1' 
              style={{ padding: "10px 25px", marginTop: "10px" }} 
              value="Register"
            /> 
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;