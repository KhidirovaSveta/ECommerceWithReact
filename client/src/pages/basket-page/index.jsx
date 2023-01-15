import React from "react";
import { Link, NavLink } from "react-router-dom";
import BgCup from "../../components/bg-cup";
import "./index.scss";

const BasketPage = ({ basket, setBasket }) => {
  const handleRemove = (id) => {
    let removeProduct = basket.filter((el) => el.id !== id);
    setBasket(removeProduct);
  };
  return (
    <div>
      <BgCup bgCupName={"Your Shopping Cart"} bgName={"Your Shopping Cart"} />
      <div className="container">
        <div className="basket">
          <div className="my-cart">
            <p>My Cart:</p>
          </div>
          {basket.map((el) => {
            return (
              <>
                <div className="main-info">
                  <div className="img">
                    <Link to={"/pages/details-page/" + el.id}><img src={el.img1} alt="" /></Link>
                  </div>
                  <div className="info">
                    <p> {el.name}</p>
                    <p> {el.unitPrice}</p>
                  </div>
                  <button  className="removeBtn" onClick={() => handleRemove(el.id)}>Remove</button>
                  <p>{el.unitPrice}</p>
                </div>
              </>
            );
          })}
          <div className="link">
            <NavLink> Continue shopping </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketPage;
