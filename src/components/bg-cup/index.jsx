import React from "react";
import Cup from "../../images/products/cupcup.jpg";
import "./index.scss";

const BgCup = () => {
  return (
    <div className="container">
      <div className="cup-img">
        <img src={Cup} alt="" className="cupImg" />
        <div className="text">
          <span>Home</span>
          <span>Account</span>
          <p>Account</p>
        </div>
      </div>
    </div>
  );
};

export default BgCup;
