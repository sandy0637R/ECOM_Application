import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State for error messages
  const [success, setSuccess] = useState(""); // State for success messages

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset success and error messages
    setError("");
    setSuccess("");

    // Basic validation
    if (!name || !email || !password) {
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

    // Store signup data in localStorage with login status
    const userData = {
      name,
      email,
      password,
      isLoggedIn: true, // Set the user as logged in after signup
    };

    try {
      localStorage.setItem("userData", JSON.stringify(userData));
      console.log("Signup data stored successfully:", userData);

      // Reset form after successfully storing the data
      setName("");
      setEmail("");
      setPassword("");

      // Display success message
      setSuccess("Signup successful! Redirecting to home page...");

      // Add a delay for smooth navigation
      setTimeout(() => {
        navigate("/"); // Navigate to the homepage or profile page
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
          {error && <div className="error-message">{error}</div>} {/* Display error message */}
          {success && <div className="success-message">{success}</div>} {/* Display success message */}
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
