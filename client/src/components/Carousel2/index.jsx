import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./index.scss";
import axios from "axios";
import { Link } from "react-router-dom";

const Carousel2 = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/products2/")
      .then((data) => setItems(data.data));
  }, []);

  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      centeredSlides={true}
      pagination={{
        clickable: true,
      }}
      className="mySwiper"
    >
      {items?.map((items) => {
        return (
          <>
            <SwiperSlide key={items.id}>
              <div className="slider">
                <Link to={"/"}>
                  {" "}
                  <img src={items.img} alt="" />{" "}
                </Link>
                <div className="products-name">
                  <p className="descriptionItem">{items.descriptionItem}</p>
                  <p className="data">03 JAN, 2022</p>
                </div>
              </div>
            </SwiperSlide>
          </>
        );
      })}
    </Swiper>
  );
};

export default Carousel2;
