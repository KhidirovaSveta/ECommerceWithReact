import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import "./index.scss"

const DetailImg = () => {
    const [detail, setDetails] = useState([]);
    const { id } = useParams();
  
    useEffect(() => {
      fetch(`http://localhost:8080/products/${id}`)
        .then((response) => response.json())
        .then((data) => setDetails(data));
    }, []);
  return (
    <>
     <div className="img-details">
          <div class="slider-box">
            <img
              src={detail.img1}
              class="big-img"
              alt="Living Room"
            />
          </div>
          <div class="display">
            <div>
              <img
                src={detail.img2}
                alt="Living Room"
                class="img1"
              />
            </div>
            <div>
              <img
                src={detail.img3}
                alt="Kitchen Room"
                class="img2"
              />
            </div>
            {/* <div>
              <img
                src={detail?.img4}
                alt="Kitchen Room"
                width="30%"
                class="img2"
              />
            </div> */}
          </div>
        </div>
    </>
        
  )
}

export default DetailImg