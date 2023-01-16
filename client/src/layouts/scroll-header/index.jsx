import React, { useLayoutEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import "./index.scss";
import Logo from "../../images/logo.webp";
import { Dropdown, Menu } from "antd";

const Header = ({ count, setCount }) => {
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

  // page

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

                <li>
                  <Dropdown
                    overlay={
                      <Menu>
                        <div className="shop">
                          <div className="categoriesOne">
                            <Menu.Item key="0" className="menu">
                              <span className="yellow">BEST SELLER</span>
                            </Menu.Item>
                            <Menu.Item key="1" className="menu">
                              Antique Kettle
                            </Menu.Item>
                            <Menu.Item key="2" className="menu">
                              Wooden Stand
                            </Menu.Item>
                            <Menu.Item key="3" className="menu">
                              Wooden Bowl Set
                            </Menu.Item>
                            <Menu.Item key="4" className="menu">
                              Wood Stand
                            </Menu.Item>
                            <Menu.Item key="5" className="menu">
                              Wood Bowl
                            </Menu.Item>
                            <Menu.Item key="6" className="menu">
                              Ceramic Stand
                            </Menu.Item>
                            <Menu.Item key="7" className="menu">
                              Antique Kettle
                            </Menu.Item>
                          </div>
                          <div className="categoriesTwo">
                            <Menu.Item key="15" className="menu">
                              <span className="yellow">DECORATIVER</span>
                            </Menu.Item>
                            <Menu.Item key="8" className="menu">
                              Wood Kitchen Stand
                            </Menu.Item>
                            <Menu.Item key="9" className="menu">
                              Antique Kettle
                            </Menu.Item>
                            <Menu.Item key="10" className="menu">
                              Wooden Stand
                            </Menu.Item>
                            <Menu.Item key="11" className="menu">
                              Antique Kettle
                            </Menu.Item>
                            <Menu.Item key="12" className="menu">
                              Wooden Stand
                            </Menu.Item>
                            <Menu.Item key="13" className="menu">
                              Wood Stand
                            </Menu.Item>
                            <Menu.Item key="14" className="menu">
                              Antique Kettle
                            </Menu.Item>
                          </div>
                          <div className="categoriesThird">
                            <Menu.Item key="15" className="menu">
                              <span className="yellow">HOME DECOR</span>
                            </Menu.Item>
                            <Menu.Item key="15" className="menu">
                              Wood Stand
                            </Menu.Item>
                            <Menu.Item key="16" className="menu">
                              Antique Kettle
                            </Menu.Item>
                            <Menu.Item key="17" className="menu">
                              Wood Kitchen Stand
                            </Menu.Item>
                            <Menu.Item key="18" className="menu">
                              Wooden Stand
                            </Menu.Item>
                            <Menu.Item key="19" className="menu">
                              Ceramic Stand
                            </Menu.Item>
                            <Menu.Item key="20" className="menu">
                              Wooden Stand
                            </Menu.Item>
                            <Menu.Item key="21" className="menu">
                              Wood Stand
                            </Menu.Item>
                          </div>
                        </div>
                      </Menu>
                    }
                    trigger={["hover"]}
                  >
                    <a
                      className="ant-dropdown-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      Shop<i className="fa-solid fa-angle-down"></i>
                    </a>
                  </Dropdown>
                </li>

                <li>
                  <Dropdown
                    overlay={
                      <Menu>
                        <div className="shop">
                          <div className="categoriesOne">
                            <Menu.Item key="15" className="menu bold">
                              <span>BEST SELLER</span>
                            </Menu.Item>
                            <Menu.Item key="8" className="menu bold">
                              {" "}
                              <span>HOME DECOR </span>
                            </Menu.Item>
                            <Menu.Item key="9" className="menu bold">
                              <span>DECORATIVER</span>
                            </Menu.Item>
                            <Menu.Item key="10" className="menu bold">
                              <span>TABLEWARE</span>
                            </Menu.Item>
                            <Menu.Item key="11" className="menu bold">
                              <span>TOP SELLING</span>
                            </Menu.Item>
                          </div>
                          <div className="categoriesTwo">
                            <Menu.Item key="0" className="menu">
                              <span className="yellow">BEST SELLER</span>
                            </Menu.Item>
                            <Menu.Item key="1" className="menu">
                              Antique Kettle
                            </Menu.Item>
                            <Menu.Item key="2" className="menu">
                              Wooden Stand
                            </Menu.Item>
                            <Menu.Item key="3" className="menu">
                              Wooden Bowl Set
                            </Menu.Item>
                            <Menu.Item key="4" className="menu">
                              Wood Stand
                            </Menu.Item>
                            <Menu.Item key="5" className="menu">
                              Wood Bowl
                            </Menu.Item>
                            <Menu.Item key="6" className="menu">
                              Ceramic Stand
                            </Menu.Item>
                            <Menu.Item key="7" className="menu">
                              Antique Kettle
                            </Menu.Item>
                          </div>
                          <div className="categoriesThird">
                            <Menu.Item key="15" className="menu">
                              <span className="yellow">HOME DECOR</span>
                            </Menu.Item>
                            <Menu.Item key="15" className="menu">
                              Wooden Bowl Set
                            </Menu.Item>
                            <Menu.Item key="16" className="menu">
                              Wood Bowl
                            </Menu.Item>
                            <Menu.Item key="16" className="menu yellow">
                              <span>TABLEWARE</span>
                            </Menu.Item>
                            <Menu.Item key="17" className="menu">
                              Antique Kettle
                            </Menu.Item>
                            <Menu.Item key="18" className="menu">
                              Ceramic Stand
                            </Menu.Item>
                          </div>
                        </div>
                      </Menu>
                    }
                    trigger={["hover"]}
                  >
                    <a
                      className="ant-dropdown-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      Product<i className="fa-solid fa-angle-down"></i>
                    </a>
                  </Dropdown>
                </li>

                <li>
                  {" "}
                  <NavLink to={"/pages/blog"}> Blog </NavLink>
                </li>

                <li>
                  <Dropdown
                    overlay={
                      <Menu>
                        <div className="shop">
                          <div className="categoriesOne">
                            <Menu.Item key="15" className="menu">
                              ABOUT US
                            </Menu.Item>
                            <Menu.Item key="8" className="menu">
                              {" "}
                              CONTACT US{" "}
                            </Menu.Item>
                            <Menu.Item key="9" className="menu">
                              FAQS
                            </Menu.Item>
                            <Menu.Item key="10" className="menu">
                              PAYMENT POLICE
                            </Menu.Item>
                            <Menu.Item key="11" className="menu">
                              PRIVACY POLICE
                            </Menu.Item>
                            <Menu.Item key="11" className="menu">
                              RETURN POLICE
                            </Menu.Item>
                            <Menu.Item key="11" className="menu">
                              PAGE 404
                            </Menu.Item>
                          </div>
                        </div>
                      </Menu>
                    }
                    trigger={["hover"]}
                  >
                    <a
                      className="ant-dropdown-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      Page<i className="fa-solid fa-angle-down"></i>
                    </a>
                  </Dropdown>
                </li>
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
                <i className="fa-solid fa-bag-shopping icon">
                  {" "}
                  <sub>{count}</sub>
                </i>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
