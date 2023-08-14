import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
export default function Navbar(props){
    return(
        <nav className="navbar bg-{props.mode} navbar-expand-lg bg-body-tertiary" data-bs-theme={props.mode}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {props.aboutText}
                </Link>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}

            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" role="switch" onChange={props.toggleMode} id="flexSwitchCheckDefault" />
              <label className={`form-check-label text-${props.mode==='light'?'black':'white'}`} htmlFor="flexSwitchCheckDefault">switch to Dark Mode</label>
            </div>
            <button className="btn btn-warning mx-2" onClick={props.changeYellow}>Yellow</button>
            <button className="btn btn-success mx-2" onClick={props.changeGreen}>Green</button>
            <button className="btn btn-info mx-2" onClick={props.changeCyan}>Cyan</button>
          </div>
        </div>
      </nav>
    )
}

// define variable type
// Navbar.propTypes = {
//     title: PropTypes.string,
//     aboutText: PropTypes.string
// }

// Required
// Navbar.propTypes = {
//     title: PropTypes.string.isRequired,
//     aboutText: PropTypes.string.isRequired
// }

//Set Default value
Navbar.defaultProps = {
    title: "Set title here",
    aboutText: "About text here"
}