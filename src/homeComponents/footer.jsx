import React from "react";
import {FaLinkedin, FaGithub } from "react-icons/fa"; 
import "./style.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-info">
          <p>© {currentYear} My Awesome Project</p>
        </div>

        <div className="footer-socials" aria-label="Social media links">
          <a href="https://linkedin.com/in/yushmitabisu18/?" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/yushmitabisu018" aria-label="GitHub">
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
