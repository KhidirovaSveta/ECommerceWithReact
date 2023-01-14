import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="social-media">
          <p className="social-text">Social media</p>
          <i className="fa-brands fa-linkedin-in"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-youtube"></i>
          <p className="studio">© 2022 VOLIA STUDIO</p>
        </div>
        <div className="contact">
          <p className="phone">+091 2345 6789</p>
          <p className="site">contact@volia.com</p>
          <Link><p>TERMS & CONDITIONS</p></Link>
        </div>
        <div className="email">
          <p className="be-text">Be the fiarst to know</p>
          <input type="text" placeholder="Enter your email" />
          <button className="footer-btn">SUBSCRIBE</button>
          <Link><p>SHIPPING & DELIVERY</p></Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
