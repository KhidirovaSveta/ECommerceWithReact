import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import Product11 from "../../images/products/art-store-blog-01.webp";
import Product12 from "../../images/products/art-store-blog-02.webp";
import Product13 from "../../images/products/art-store-blog-03.webp";
import Product4 from "../../images/products/art-store-blog-04.webp";
import Product5 from "../../images/products/art-store-blog-05.webp";
import Product6 from "../../images/products/art-store-blog-06.webp";


import "./index.scss";
// import { Pagination } from "swiper";

const Carousel2 = () => {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        // modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide> <img src={Product11} alt="" /></SwiperSlide>
        <SwiperSlide> <img src={Product12} alt="" /></SwiperSlide>
        <SwiperSlide> <img src={Product13} alt="" /></SwiperSlide>
        <SwiperSlide> <img src={Product4} alt="" /></SwiperSlide>
        <SwiperSlide> <img src={Product5} alt="" /></SwiperSlide>
        <SwiperSlide> <img src={Product6} alt="" /></SwiperSlide>

      </Swiper>
    </>
  );
};

export default Carousel2;