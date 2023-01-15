import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";

// import Product1 from "../../images/products/store-product-01.webp";
// import Product2 from "../../images/products/product-02.webp";
// import Product3 from "../../images/products/store-product-03.webp";
// import Product4 from "../../images/products/store-product-04.webp";
// import Product5 from "../../images/products/store-product-05.webp";
// import Product6 from "../../images/products/store-product-06.webp";
// import Product7 from "../../images/products/store-product-07.webp";
// import Product8 from "../../images/products/store-product-08.webp";
// import Product9 from "../../images/products/store-product-09.webp";

import "./index.scss";
import { useState } from "react";
import axios from "axios";
// import { Pagination } from "swiper";

const Carousel = ({ basket, setBasket }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/").then((data) => setProducts(data.data));
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
                <div className="slider" >
                  <Link to={"/pages/details-page/" + products.id}>
                    {" "}
                    <img src={products.img1} alt="" />{" "}
                  </Link>
                  <div className="products-name">
                    <p>{products.name}</p>
                    <button onClick={() => handleAddToCard(products)}>Add To Card </button>
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
