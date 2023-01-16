import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "./index.scss";
import { useState } from "react";
import axios from "axios";

const Carousel = ({ basket, setBasket, count, setCount }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/").then((data) => setProducts(data.data));
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
    <div className="carousel">
      <Swiper
        loop={true}
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {products?.map((products) => {
          return (
            <>
              <SwiperSlide key={products.id}>
                <div className="slider">
                  <Link to={"/pages/details-page/" + products.id}>
                    {" "}
                    <img src={products.img1} alt="" />{" "}
                  </Link>
                  <div className="products-name">
                    <p>{products.name}</p>
                    <button
                      className="btnAdd"
                      onClick={() => handleAddToCard(products)}
                    >
                      {!basket.find((el) => el.id === products.id)
                        ? "ADD TO CARD"
                        : "ALREADY ADDED"}
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Carousel;
