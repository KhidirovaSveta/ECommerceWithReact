import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./index.scss"

const DetailPage = () => {
    const [detail, setDetails] = useState([]);
    const { id } = useParams();
  
    useEffect(() => {
      fetch(`http://localhost:8080/products/${id}`)
        .then((response) => response.json())
        .then((data) => setDetails(data));
        
    },[]);

  return (
    <div className="container">
      <div className="details">
        <div className="img-details">
          <img src={detail.img1} alt="" />
        </div>
          <div className="product-info">
            <h1>{detail.name}</h1>
            <Link to={"/"}> HOME </Link>
          </div>
      </div>
    </div>
  );
};

export default DetailPage;
