import React, { useLayoutEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import "./index.scss";
import Logo from "../../images/logo.webp";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space } from "antd";

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

  const items = [
    {
      key: "1",
      label: "About Us",
      children: [
        {
          key: "1-1",
          label: "About Modern",
        },
        {
          key: "1-2",
          label: "About Simple",
        },
      ],
    },

    {
      key: "2",
      label: "Contact Us",
      children: [
        {
          key: "1-1",
          label: "Contact Modern",
        },
        {
          key: "1-2",
          label: "Contact Simple",
        },
      ],
    },
    {
      key: "3",
      label: "FAQS",
    },
    {
      key: "4",
      label: "Payment Policy",
    },
    {
      key: "5",
      label: "Privacy Policy",
    },
    {
      key: "6",
      label: "Payment Policy",
    },
    {
      key: "7",
      label: "Terms & Condition",
    },
    {
      key: "8",
      label: "Page 404",
    },
  ];

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
                        <Menu.Item key="0">Banner With Sidebar</Menu.Item>
                        <Menu.Item key="1">Boxed Banner</Menu.Item>
                        <Menu.Item key="2">Infinite Ajaxscroll</Menu.Item>
                        <Menu.Item key="3">Horizontal Filter</Menu.Item>
                        <Menu.Item key="4">Navigation Filter</Menu.Item>
                        <Menu.Item key="5">Navigation Filter</Menu.Item>
                        <Menu.Item key="6">Off-Canvas Filter</Menu.Item>
                        <Menu.Item key="7">Right Toggle Sidebar</Menu.Item>
                      </Menu>
                    }
                    trigger={["hover"]}
                  >
                    <a
                      onClick={(e) => e.preventDefault()}
                    >
                      Shop
                    </a>
                  </Dropdown>
                </li>

                <li>
                  <Dropdown
                    overlay={
                      <Menu>
                        <Menu.Item key="0">Banner With Sidebar</Menu.Item>
                        <Menu.Item key="1">Boxed Banner</Menu.Item>
                        <Menu.Item key="2">Infinite Ajaxscroll</Menu.Item>
                        <Menu.Item key="3">Horizontal Filter</Menu.Item>
                        <Menu.Item key="4">Navigation Filter</Menu.Item>
                        <Menu.Item key="5">Navigation Filter</Menu.Item>
                        <Menu.Item key="6">Off-Canvas Filter</Menu.Item>
                        <Menu.Item key="7">Right Toggle Sidebar</Menu.Item>
                      </Menu>
                    }
                    trigger={["hover"]}
                  >
                    <a
                      className="ant-dropdown-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      Categories
                    </a>
                  </Dropdown>
                </li>

                <li>
                  {" "}
                  <NavLink to={"/pages/blog"}> Blog </NavLink>
                </li>

                <li>
                  <Dropdown
                    menu={{
                      items,
                    }}
                  >
                    {/* <a onClick={(e) => e.preventDefault()}> */}
                    <Space>
                      Page
                      <DownOutlined />
                    </Space>
                    {/* </a> */}
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
