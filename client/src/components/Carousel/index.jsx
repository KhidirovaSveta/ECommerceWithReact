import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import Product1 from "../../images/products/store-product-01.webp";
import Product2 from "../../images/products/product-02.webp";
import Product3 from "../../images/products/store-product-03.webp";
import Product4 from "../../images/products/store-product-04.webp";
import Product5 from "../../images/products/store-product-05.webp";
import Product6 from "../../images/products/store-product-06.webp";
import Product7 from "../../images/products/store-product-07.webp";
import Product8 from "../../images/products/store-product-08.webp";
import Product9 from "../../images/products/store-product-09.webp";

import "./index.scss";
// import { Pagination } from "swiper";

const Carousel = () => {
  return (
    <>
      <Swiper
        loop={true}
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        // modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          <img src={Product5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={Product1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={Product2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={Product3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={Product4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={Product9} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={Product8} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={Product7} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={Product6} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousel;
