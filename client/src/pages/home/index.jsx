import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import Bgphoto from "../../images/bg-img.webp";
import Carousel from "../../components/Carousel";
import Button from "../../components/button";
import Carousel2 from "../../components/Carousel2";

const Home = ({ basket, setBasket }) => {
  return (
    <div className="home">
      <div className="main-text">
        <img src={Bgphoto} alt="" className="image" />
        <h3 className="gradient">unique</h3>
        <h1 className="decor"> DECOR </h1>
        <Button btnName={'NEW COLLECTION'}/>
      </div>

      <div className="container">

        {/* Home decore and  tableware links section*/}

        <div className="second-section">
          <div className="box">
            <Link>
              <div className="img-container">
                <div className="img-holder"></div>
                <div className="plus">
                  <i className="fa-solid fa-plus"></i>
                </div>
              </div>
              <div className="block">
                <p className="vertical-rl">home decor</p>{" "}
              </div>
            </Link>
          </div>
          <div className="box2">
            <Link>
              <div className="img2-container">
                <div className="img2-holder"></div>
                <div className="plus">
                  <i className="fa-solid fa-plus"></i>
                </div>
              </div>
              <div className="block">
                <p className="vertical-rl">tableware</p>{" "}
              </div>
            </Link>
          </div>
        </div>

        {/* Date information section */}

        <div className="third-section">
          <div className="info">
            <p className="gradient2"> Open the store </p>
            <p className="date"> 25 DEC 1978</p>
          </div>

          <div className="text">
            <p className="textwith">
              Something can be old, but it can be timeless therefore, it becomes
              an antique. If this antique is preserved and deemed precious, it
              could be passed down as a family heirloom.
            </p>
            <div className="right">
              <Link>
                <div className="story-line">
                  <div className="line"></div>
                  <p>OUR STORY</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel section */}

      <div className="carousel">
        <Carousel  basket={basket} setBasket={setBasket}/>
      </div>

      <div className="btn-2">
        <Button btnName={'ALL PRODUCTS'}/>
      </div>

      {/* Decorative links section */}

      <div className="container">
        <div className="four-section">
          <div className="box3">
            <Link>
              <div className="img3-container">
                <div className="img3-holder"></div>
                <div className="plus">
                  <i className="fa-solid fa-plus"></i>
                </div>
              </div>
              <div className="block">
                <p className="vertical-rl">home decor</p>{" "}
              </div>
            </Link>
          </div>
          <div className="box4">
            <div className="text2">
              <div className="right2">
                <Link>
                  <div className="real-passion">
                    <div className="line"></div>
                    <p>REAL PASSION</p>
                  </div>
                </Link>
              </div>
              <p className="textwith">
                What started as a hobby & a way to pass time, evolved into a
                real passion
              </p>
            </div>

            <Link>
              <div className="img4-container">
                <div className="img4-holder"></div>
                <div className="plus">
                  <i className="fa-solid fa-plus"></i>
                </div>
              </div>
              <div className="block">
                <p className="vertical-rl">tableware</p>{" "}
              </div>
            </Link>
          </div>
        </div>

        <div className="five-section">
          <div className="THE_BEST_PRICE">
            <p>01, THE BEST PRICE</p>
            <span>
              The best price we provide is in accordance with the quality and
              quantity of art products we provide
            </span>
          </div>

          <div className="UNIQUE_STYLE">
            <p>02, UNIQUE STYLE</p>
            <span>
              A unique and different styles from other art products gives a
              luxurious and minimalist impression
            </span>
          </div>

          <div className="PREMIUM_QUALITY">
            <p>03, PREMIUM QUALITY</p>
            <span>
              Premium quality that makes art products more elegant and more
              durable when you use it
            </span>
          </div>
        </div>

        {/* Last section */}
        <div className="blog_post">
          <h1>BLOG POST</h1>
        </div>
        <Carousel2 />
        {/* <div className="last-section">
          <div className="card">
            <Link>
              <div className="card-container">
                <div className="card-img-holder"></div>
              </div>
            </Link>
          </div>
          <div className="card2">
            <Link>
              <div className="card2-container">
                <div className="card2-img-holder"></div>
              </div>
            </Link>
          </div>

          <div className="card3">
            <Link>
              <div className="card3-container">
                <div className="card3-img-holder"></div>
              </div>
            </Link>
          </div>
        </div> */}
        
      </div>
    </div>
  );
};

export default Home;
