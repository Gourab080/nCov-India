import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const navLinkProps = (path, animationDelay) => ({
    className: `${window.location.pathname === path ? 'focused' : ''}`,
    style: {
        animationDelay: `${animationDelay}s`,
    },
});

function Navbar({pages}) {
    const [expand, setExpand] = useState(false);
    return (
        <nav className="navbar navbar-expand-lg navbar-dark info-color">
        <a className="navbar-brand" href="#">PANDEMIC2020</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link waves-effect waves-light" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link waves-effect waves-light" href="#">Help</a>
            </li>
            <li className="nav-item">
              <a className="nav-link waves-effect waves-light" href="#">FAQs</a>
            </li>
          </ul>
          
        </div>
      </nav>
    );
}

export default Navbar;
