import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="nav-grand-wrapper">
      <div className="nav-wrapper">
          <Link className="nav-link" to="/">Home</Link>

          <Link className="nav-link" to="/about">About</Link>
          
          <Link className="nav-link" to="/account">Account</Link>
      </div>
      <div className="nav-profile-wrapper">
        <div className="nav-profile-bubble">
          {/* THIS IS YOUR AVATAR CIRCLE IN YOUR NAVBAR */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;