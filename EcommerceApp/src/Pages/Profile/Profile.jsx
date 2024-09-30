import React from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  
  // Retrieve user data from localStorage
  const userData = JSON.parse(localStorage.getItem("userData"));

  // Redirect to the register page if user data is not found
  if (!userData || !userData.isLoggedIn) {
    navigate('/register'); // Adjust the path if necessary
    return null; // Prevent rendering while navigating
  }

  return (
    <div className='profile-page'>
      <h1 className='profile-heading'>User Profile</h1>
      <div className='profile-details'>
        <p><strong>Name:</strong> {userData.name}</p>
        <p><strong>Email:</strong> {userData.email}</p>
        <p><strong>Phone Number:</strong> {userData.phone}</p>
        <p><strong>Address:</strong> {userData.address}</p>
      </div>
    </div>
  );
}

export default Profile
