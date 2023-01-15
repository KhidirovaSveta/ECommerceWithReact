import React, { useLayoutEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import "./index.scss";
import Logo from "../../images/logo.webp";

const Header = () => {
  const stickyHeader = useRef();
  useLayoutEffect(() => {
    const mainHeader = document.getElementById("mainHeader");
    let fixedTop = stickyHeader.current.offsetTop;
    const fixedHeader = () => {
      if (window.pageYOffset > fixedTop) {
        mainHeader.classList.add("fixedTop");
      } else {
        mainHeader.classList.remove("fixedTop");
      }
    };
    window.addEventListener("scroll", fixedHeader);
  }, []);

  return (
    <div>
      <div>
        <div className="mainHeader" id="mainHeader" ref={stickyHeader}>
          <div className="header">
            <NavLink to={"/"}>
              <img src={Logo} alt="" />
            </NavLink>

            <nav className="navBar">
              <ul>
                <li>
                  {" "}
                  <NavLink to={"/"}> Home </NavLink>
                </li>
                <div className="dropdown">
                  <li>
                    {" "}
                    Shop
                    <div className="dropdown-options">
                      <ul> Wood </ul>
                      <ul> Wood </ul>
                    </div>
                  </li>
                </div>
              </ul>
            </nav>

            {/* Account, Basket */}

            <div className="icons">
              <i className="fa-solid fa-magnifying-glass  icon"></i>
              <NavLink to={"/pages/account"}>
                <i className="fa-regular fa-user icon"></i>
              </NavLink>
              <i className="fa-regular fa-heart icon"></i>
              <NavLink to={"/pages/basket-page"}>
                <i className="fa-solid fa-basket-shopping icon"></i>
              </NavLink>
            </div>
          </div>
        </div>
        {/* <div className="main-block">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            lacinia pretium erat ac rutrum.
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Header;
