import React from "react";
import "./index.scss";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="main">
      <div className="container">
        <div className="header">
          <Link to={"/"}><div className="logo"></div></Link>
          <div className="dropdown">
            <ul class="link-list">
              <li>
                <NavLink to={"/"}> Home </NavLink>
              </li>
              <ul>
                <li>
                  {" "}
                  <NavLink to={"/"}> Shop </NavLink>
                </li>

                <li className="drop">
                  <h6 className="sublink-title">
                    <a href="/collections/best-seller">Best seller</a>
                  </h6>
                  <ul className="dropdown-submenu">
                    <li className="supmenu-li">
                      <a
                        href="/products/copy-of-flowing-printed-shirt"
                        className="suplink-title"
                      >
                        Antique kettle
                      </a>
                    </li>
                    <li className="supmenu-li">
                      <a
                        href="/products/buckled-leather-clogs"
                        className="suplink-title"
                      >
                        Wooden stand
                      </a>
                    </li>
                    <li className="supmenu-li">
                      <a
                        href="/products/chambray-shirt"
                        className="suplink-title"
                      >
                        Wooden bowl set
                      </a>
                    </li>
                    <li className="supmenu-li">
                      <a
                        href="/products/copy-of-mode-solo-blue-and-silver"
                        className="suplink-title"
                      >
                        Wood stand
                      </a>
                    </li>
                    <li className="supmenu-li">
                      <a
                        href="/products/cotton-t-shirt"
                        className="suplink-title"
                      >
                        Wood bowl
                      </a>
                    </li>
                    <li className="supmenu-li">
                      <a
                        href="/products/copy-of-mode-solo-black"
                        className="suplink-title"
                      >
                        Ceramic stand
                      </a>
                    </li>
                    <li className="supmenu-li">
                      <a
                        href="/products/copy-of-flowing-printed-shirt"
                        className="suplink-title"
                      >
                        Antique kettle
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>

              <li>
                <NavLink to={"/pages/blog"}> Blog </NavLink>
              </li>
            </ul>
          </div>

          <div className="icons">
            <i className="fa-solid fa-magnifying-glass  icon"></i>
            <Link to={"/pages/account"}><i className="fa-regular fa-user icon"></i></Link>
            <i className="fa-regular fa-heart icon"></i>
            <i className="fa-solid fa-basket-shopping icon"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
