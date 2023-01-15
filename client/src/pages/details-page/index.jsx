import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./index.scss";

const DetailPage = ({ basket, setBasket }) => {
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
      console.log(basket);
    } else {
      alert("Already added");
    }
  };

  return (
    <div className="container">
      {/* img section */}

      <div className="details">
        {/* <img src={detail.img1} alt=""  className="main-img"/> */}

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
            {/* <p>No reviews</p> */}
          </div>

          {/* product price */}
          <div className="price-section">
            <p className="price">
              {detail.unitPrice} <strike>{detail.priceOff}</strike>
            </p>
            <div className="sale"> {detail?.sale}</div>
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

          {/* ADD Button */}
          <div className="add-section">
            <button className="addBtn" onClick={() => handleAddToCard(detail)}>
              {!basket.find((el) => el.id === detail.id)
                ? "ADD TO CARD"
                : "ALREADY ADDED"}
            </button>
            <button className="buyBtn"> BUY NOW </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
