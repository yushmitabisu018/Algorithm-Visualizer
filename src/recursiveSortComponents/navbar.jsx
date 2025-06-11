import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
        <div className="container-fluid d-flex align-items-center justify-content-between">
         
          <div className="d-flex align-items-center">
            <span className="navbar-brand text-white">Recursive Sorting Visualizer</span>
            <NavLink
              exact
              to="/"
              className="nav-link text-white ms-3"
              activeClassName="active-link"
            >
              Home
            </NavLink>
          </div>

        </div>
      </nav>
    );
  }
}

export default Navbar;
