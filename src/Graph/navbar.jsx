import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
        <div className="container-fluid d-flex align-items-center justify-content-between">
          
          <div className="d-flex align-items-center">
            <span className="navbar-brand fw-bold text-white">Recursion Tree</span>
            <Link to="/" className="nav-link text-white ms-3">
              Home
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
