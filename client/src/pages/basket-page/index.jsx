import React from "react";
import { Link, NavLink } from "react-router-dom";
import BgCup from "../../components/bg-cup";
import "./index.scss";
import { Helmet } from "react-helmet";

const BasketPage = ({ basket, setBasket, count, setCount }) => {
  const handleRemove = (id) => {
    let removeProduct = basket.filter((el) => el.id !== id);
    setBasket(removeProduct);
    setCount(count - 1);
  };
  const totalPrice = () => {
    let total = 0;
    basket.map((el) => {
      total += +el.unitPrice;
    });
    return total;
  };
  return (
    <div>
      <BgCup bgCupName={"Your Shopping Cart"} bgName={"Your Shopping Cart"} />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Basket</title>
      </Helmet>
      <div className="container">
        <div className="basket">
          <div className="basket-items">
            <div className="my-cart">
              <p>My Cart:</p>
            </div>
            {basket.map((el) => {
              return (
                <>
                  <div className="main-info">
                    <div className="img">
                      <Link to={"/pages/details-page/" + el.id}>
                        <img src={el.img1} alt="" />
                      </Link>
                    </div>
                    <div className="info">
                      <p> {el.name}</p>
                      <p> £{el.unitPrice}</p>
                    </div>
                    <button
                      className="removeBtn"
                      onClick={() => handleRemove(el.id)}
                    >
                      Remove
                    </button>
                    <p className="price-per-unit">£{el.unitPrice}</p>
                  </div>
                </>
              );
            })}
            <div className="link">
              <NavLink> Continue shopping </NavLink>
            </div>
          </div>

          <div className="right-section">
            <div className="shipping-Info">
              <p className="shipping">Shipping Info</p>
              <div className="country">
                <p className="count">Country</p>
                <select name="country" id="country">
                  <option value="Azerbaijan">Azerbaijan</option>
                  <option value="Canada">Canada</option>
                  <option value="Germany">Germany</option>
                  <option value="China">China</option>
                </select>
                <br />
              </div>

              <div className="zip">
                <label htmlFor="Zip"> Zip/Postal code</label>
                <br />
                <input type="text" placeholder="Zip/Postal code" />
              </div>
              <Link> Checkout</Link>

            </div>

            <div className="total">
              <div className="price">
                <p>Total: </p>
                <p className="currency">£{totalPrice()}</p>
              </div>
              <input type="text" placeholder="Discount code" />
              <br />
              <Link> Checkout</Link>

              <div className="pay">
                <i className="fa-brands fa-cc-visa payment"></i>
                <i className="fa-brands fa-cc-mastercard payment"></i>
                <i className="fa-brands fa-cc-amex payment"></i>
                <i className="fa-brands fa-cc-paypal payment"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketPage;
