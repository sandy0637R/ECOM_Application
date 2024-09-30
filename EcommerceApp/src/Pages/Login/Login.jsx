import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate for redirection

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    // Get stored user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem("userData"));

    // Check if the stored data exists and matches the input email and password
    if (!storedUser || storedUser.email !== email || storedUser.password !== password) {
      setError("Invalid email or password.");
      return;
    }

    // If credentials are correct, update isLoggedIn to true
    const updatedUser = { ...storedUser, isLoggedIn: true };
    localStorage.setItem("userData", JSON.stringify(updatedUser));

    console.log("Login successful", { email });

    // Reset form
    setEmail("");
    setPassword("");
    setError("");

    // Redirect to /home page after successful login
    navigate("/");
  };

  return (
    <>
      <div className='login-page'>
        <form className='login-main' onSubmit={handleSubmit}>
          <h1 className='login-heading'>Login</h1>
          {error && <div className="error-message">{error}</div>} {/* Display error message */}
          <div className='login-sec'>
            <label className='login-label' htmlFor='userEmail'>Email:</label>
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
            <label className='login-label' htmlFor='userPassword'>Password:</label>
            <input
              name='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
              type="password"  
              className='login-input'
              id='userPassword'
            />
          </div>
          <div className='login-buttons'>
            <input type="submit" className='button1' value="Login" />
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
