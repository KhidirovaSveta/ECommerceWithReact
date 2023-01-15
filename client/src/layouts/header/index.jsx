import React from "react";
import "./index.scss";
import { Link, NavLink } from "react-router-dom";

const Head = () => {
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
                <div className="dropdown">
                  <NavLink to={"/"}> Shop </NavLink>
                  <div className="dropdown-options">
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
              <Link to={"/pages/basket-page"}>
                <i className="fa-solid fa-basket-shopping icon"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Head;
