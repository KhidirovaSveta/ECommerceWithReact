import React from "react";
import "./index.scss";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="main">
      <div className="container">
        <div className="header">
          <div className="fixed-head">
            <Link to={"/"}>
              <div className="logo"></div>
            </Link>
            <nav className="navBar">
              <ul>
                <li>
                  <NavLink to={"/"}> Home </NavLink>
                </li>
                <div class="dropdown">
                <NavLink to={"/"}> Shop </NavLink>
                  <div class="dropdown-options">
                    <Link> wood</Link>
                    <Link> wood</Link>
                    <Link> wood</Link>
                  </div>
                </div>
              </ul>

              <li>
                <NavLink to={"/pages/blog"}> Blog </NavLink>
              </li>
            </nav>

            <div className="icons">
              <i className="fa-solid fa-magnifying-glass  icon"></i>
              <Link to={"/pages/account"}>
                <i className="fa-regular fa-user icon"></i>
              </Link>
              <i className="fa-regular fa-heart icon"></i>
              <i className="fa-solid fa-basket-shopping icon"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
