import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './header.css';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg header navbar-fixed-top">
      <button
        className="header-btn"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="header-toggler-icon"></span>
        <span className="header-toggler-icon"></span>
        <span className="header-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <AnchorLink className="nav-link nav-anchor" to="/#page-1" title="HOME">
              HOME
            </AnchorLink >
          </li>
          <li className="nav-item">
            <AnchorLink className="nav-link nav-anchor" to="/#page-2" title="PROJECTS">
              PROJECTS
            </AnchorLink >
          </li>
          <li className="nav-item">
            <AnchorLink className="nav-link nav-anchor" to="/#page-3" title="WORK">
              WORK
            </AnchorLink >
          </li>
          <li className="nav-item">
            <AnchorLink className="nav-link nav-anchor" to="/#page-4" title="CONTACT">
              CONTACT
            </AnchorLink >
          </li>
          <li className="nav-item">
            <AnchorLink className="nav-link nav-anchor" to="/blog" title="BLOG">
              BLOG
            </AnchorLink >
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
