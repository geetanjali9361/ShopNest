import React, { useState } from "react";
import "./App.css";

function App() {
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <div className="App">
      {/* Navigation Bar */}
      <header className="navbar">
        <div className="logo">ShopNest</div>
        <div className="nav-right">
          <button className="signup-btn" onClick={() => setShowSignUp(true)}>
            Sign Up
          </button>
        </div>
      </header>

      {/* Home Page Content */}
      <main className="home">
        <h1>Welcome to MyShop</h1>
        <p>Find your style with our latest collections</p>
      </main>

      {/* Sign Up Modal */}
      {showSignUp && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Create Your Account</h2>
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button className="submit-btn">Sign Up</button>
            <button className="close-btn" onClick={() => setShowSignUp(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
