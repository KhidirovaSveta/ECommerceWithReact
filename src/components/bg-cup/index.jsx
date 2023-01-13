import React from "react";
import { Link } from "react-router-dom";
import Cup from "../../images/products/cupcup.jpg";
import "./index.scss";

const BgCup = () => {
  return (
    <div className="container">
      <div className="cup-img">
        <img src={Cup} alt="" className="cupImg" />
        <div className="text">
          <Link to={"/"}><span className="homelink">Home</span></Link>
          <span className="acc">Account</span>
          <p>Account</p>
        </div>
      </div>
    </div>
  );
};

export default BgCup;
