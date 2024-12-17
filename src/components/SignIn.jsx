// src/components/SignIn.js

// src/components/SignIn.js
import React, { useState } from 'react';
import './SignIn.css'; // Optional: For custom styles

const SignIn = () => {
  const [currentView, setCurrentView] = useState("signIn"); // State to manage current view

  const handleSignIn = (e) => {
    e.preventDefault();
    // Handle sign-in logic here
    console.log('Sign In Form Submitted');
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    // Handle sign-up logic here
    console.log('Sign Up Form Submitted');
  };

  return (
   
    <div className='signin-container-outer'>
    <div className="signin-container">
      <h2>{currentView === "signIn" ? "Sign In" : "Sign Up"}</h2>
      <div className="tab-container">
        <button
          className={`tab-button ${currentView === "signIn" ? "active" : ""}`}
          onClick={() => setCurrentView("signIn")}
        >
          Sign In
        </button>
        <button
          className={`tab-button ${currentView === "signUp" ? "active" : ""}`}
          onClick={() => setCurrentView("signUp")}
        >
          Sign Up
        </button>
      </div>
      
      <form onSubmit={currentView === "signIn" ? handleSignIn : handleSignUp}>
        {currentView === "signIn" ? (
          <>
            <div>
              <label>Email:</label>
              <input type="email" placeholder="Enter your email" required />
            </div>
            <div>
              <label>Password:</label>
              <input type="password" placeholder="Enter your password" required />
            </div>

          </>
        ) : (
          <>
            <div>
              <label>Username:</label>
              <input type="text" placeholder="Enter your username" required />
            </div>
            <div>
              <label>Email:</label>
              <input type="email" placeholder="Enter your email" required />
            </div>
            <div>
              <label>Password:</label>
              <input type="password" placeholder="Enter your password" required />
            </div>
          </>
        )}
        <button type="submit">{currentView === "signIn" ? "Sign In" : "Sign Up"}</button>
      </form>
    </div>
    </div>
  );
};

export default SignIn;
