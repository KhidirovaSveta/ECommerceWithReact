import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./index.scss";
import { Helmet } from "react-helmet";

const DetailPage = ({ basket, setBasket, count, setCount }) => {
  const [detail, setDetails] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:8080/products/${id}`)
      .then((response) => response.json())
      .then((data) => setDetails(data));
  }, []);

  const handleAddToCard = (obj) => {
    if (!basket.find((el) => el.id === obj.id)) {
      setBasket([...basket, obj]);
      setCount(count + 1);
    } else {
      alert("Already added");
    }
  };

  return (
    <div className="container">
      {/* img section */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Details Page</title>
      </Helmet>

      <div className="details">
        <div className="img-details">
          <img src={detail.img1} class="big-img" alt="Living Room" />
        </div>
        {/* <DetailImg/> */}

        {/* info about product */}
        <div className="product-info">
          <div className="navlink">
            <Link to={"/"}>
              {" "}
              HOME <i className="fa-solid fa-angle-right"></i>{" "}
            </Link>
            <p>{detail.name}</p>
          </div>

          {/* product name */}
          <div className="products-name">
            <h1>{detail.name}</h1>
            <p>No reviews</p>
          </div>

          {/* product price */}
          <div className="price-section">
            <div id="price">
              <p className="price">
                £{detail.unitPrice}.00  <strike> {detail.priceOff}</strike>
              </p>
              <div className="sale"> {detail?.sale}</div>
            </div>
            <div className="stars">
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
            </div>
          </div>

          <div className="availability">
            <p className="availabil">
              Availability:{" "}
              <span className="av">
                {detail.Availability} <i className="fa-solid fa-check"></i>
              </span>
            </p>
          </div>

          <p className="description">{detail.description}</p>

          {/* Color section */}
          <div className="size-section">
            <p>COLOR: </p>
            <img src={detail.img2} alt="" />
            <img src={detail?.img3} alt="" />
          </div>

          {/* size section */}
          <div className="size-section">
            <p>SIZE: </p>
            <div className="s-size size "> {detail.s} </div>
            <div className="m-size size"> {detail.m} </div>
            <div className="l-size size"> {detail.l} </div>
            <div className="xl-size size"> {detail.xl} </div>
          </div>

          {/* ADD Button */}
          <div className="add-section">
            <button className="addBtn" onClick={() => handleAddToCard(detail)}>
              {!basket.find((el) => el.id === detail.id)
                ? "ADD TO CARD"
                : "ALREADY ADDED"}
            </button>
            <button className="buyBtn"> BUY NOW </button>
          </div>

          {/* social media and paypal */}
          <div className="share">
            <p className="social-media">
              SHARE:
              <a
                href="https://www.facebook.com/"
                rel="noreferrer"
                target="_blank"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com/" rel="noreferrer" target="_blank">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a
                href="https://www.instagram.com/"
                rel="noreferrer"
                target="_blank"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="https://www.pinterest.com/"
                rel="noreferrer"
                target="_blank"
              >
                <i className="fa-brands fa-pinterest-p"></i>
              </a>
            </p>

            <i className="fa-brands fa-cc-visa payment"></i>
            <i className="fa-brands fa-cc-mastercard payment"></i>
            <i className="fa-brands fa-cc-amex payment"></i>
            <i className="fa-brands fa-cc-paypal payment"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
