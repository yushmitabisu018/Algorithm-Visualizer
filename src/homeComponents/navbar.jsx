import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AboutModal from './AboutModal'; 

class Navbar extends Component {
  state = {
    showAbout: false,
  };

  toggleAbout = () => {
    this.setState({ showAbout: !this.state.showAbout });
  };

  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
          <div className="d-flex align-items-center">
            <span className="navbar-brand text-white fw-bold">Algorithm Visualizer</span>
            <button
              className="btn btn-link nav-link text-white mb-0"
              style={{ cursor: 'pointer', paddingLeft: '0.5rem' }}
              onClick={this.toggleAbout}
            >
              About
            </button>
          </div>

          {/* Navbar toggler for mobile (optional, no other nav links now) */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

         
          <div className="collapse navbar-collapse" id="navbarSupportedContent"></div>

          <AboutModal show={this.state.showAbout} onClose={this.toggleAbout} />
        </nav>
      </>
    );
  }
}

export default Navbar;
