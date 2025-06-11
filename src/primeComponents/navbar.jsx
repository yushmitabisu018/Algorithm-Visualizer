 import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
     
        <div className="d-flex align-items-center">
          <span className="navbar-brand mb-0 h1 text-white">Seive</span>
          <NavLink
            exact
            to="/"
            activeClassName="active"
            className="nav-link text-white ms-3"
          >
            Home
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
