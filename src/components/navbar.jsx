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
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link waves-effect waves-light" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link waves-effect waves-light" href="#">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link waves-effect waves-light" href="#">Pricing</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle waves-effect waves-light" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
              <div className="dropdown-menu dropdown-info" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item waves-effect waves-light" href="#">Action</a>
                <a className="dropdown-item waves-effect waves-light" href="#">Another action</a>
                <a className="dropdown-item waves-effect waves-light" href="#">Something else here</a>
              </div>
            </li>
          </ul>
          <form className="form-inline">
            <div className="md-form my-0">
              <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
            </div>
          </form>
        </div>
      </nav>
    );
}

export default Navbar;
