
import React from "react";
import { Link } from 'react-router-dom';
import Avatars from './Account Components/Avatars'

const Navbar = () => {
  return (
    <div className="nav-grand-wrapper">
      <div className="nav-wrapper">
          <Link className="nav-link" to="/">Home</Link>

          <Link className="nav-link" to="/about">About</Link>
          
          <Link className="nav-link" to="/account">Account</Link>
      </div>
      <div className="site-title-wrapper"><h1>ASD Womxn Empowerment</h1></div>
      <div className="nav-profile-wrapper">
        <div className="nav-profile-bubble">
          <Link className="nav-link" to="/account"><Avatars/></Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;