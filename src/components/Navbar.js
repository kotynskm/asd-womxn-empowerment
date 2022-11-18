import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="nav-grand-wrapper">
      <div className="nav-wrapper">
          <Link to="/">Home</Link>

          <Link to="/about">About</Link>
          
          <Link to="/account">Account</Link>
      </div>
      <div className="nav-profile-wrapper">
        
      </div>
    </div>
  );
}

export default Navbar;