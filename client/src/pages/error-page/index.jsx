import React from "react";
import { Link, useNavigate } from "react-router-dom";
import BgCup from "../../components/bg-cup";
import ErrorImg from "../../images/404.webp";
import "./index.scss";
import { Helmet } from "react-helmet";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Not Fount</title>
      </Helmet>
      <BgCup bgCupName="404 Not Found" bgName="404 Not Found" />
      <div className="erro-page">
        <p className="top-text">
          <strong>Oops!</strong> Page not found!
        </p>
        <img src={ErrorImg} alt="" />
        <p className="botton-text">
          Sorry, But the page you are looking for does't exist!
        </p>
        <div className="errorPageBtn">
          <button onClick={() => navigate(-1)}> Go Back </button>
          <Link to={"/"}>
            <button> Go Home </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
