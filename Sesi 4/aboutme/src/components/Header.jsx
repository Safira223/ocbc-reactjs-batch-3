import React from "react";
import { NavLink } from 'react-router-dom';

function Header() {
    const activeStyle = {
        fontWeight: 700,
        color: 'yellow'
    }

    const checkIsActive = ({isActive}) => isActive ? activeStyle : undefined;

    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
          <a class="navbar-brand" href="/">My React App</a>
          <div className="container d-flex flex-wrap">
            <ul className="nav me-auto">
              <li className="nav-item">
                <NavLink to={"/"} style={checkIsActive} className="nav-link link-dark px-2">Home</NavLink>
              </li>
              <li className="nav-item"><a href="/" className="nav-link link-dark px-2">Todos</a></li>
              <li className="nav-item"><a href="/" className="nav-link link-dark px-2">FAQs</a></li>
              <li className="nav-item"><a href="/" className="nav-link link-dark px-2">About</a></li>
            </ul>
            <ul className="nav">
              <li>
                <form className="col-12 col-lg-auto mb-3 mb-lg-0">
                  <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
                </form>
              </li>
            </ul>
            <ul className="nav">
              <li><a href="/" class="btn btn-success mx-3">Login</a></li>
              <li><a href="/" class="btn btn-primary">Daftar</a></li>
            </ul>
          </div>    
        </nav>
      </>
    );
}

export default Header;
