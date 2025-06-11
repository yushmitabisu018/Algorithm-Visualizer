import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <span className="navbar-brand mb-0 h1 text-white">Binary Search Game</span>
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
