import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "./index.scss";
import { useState } from "react";
import axios from "axios";

const Carousel = ({ basket, setBasket, count, setCount, wishlist, setWishlist}) => {
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

  const handleWishlist = (el) => {
     if(!wishlist.find((e) => e.id === el.id)){
        setWishlist([...wishlist, el])
     }else{
      alert("already added")
     }
  }

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
                  <button className="wishBtn" onClick={() => handleWishlist(products)}>{(wishlist.find((e) => e.id === products.id)) ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>}</button>
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
