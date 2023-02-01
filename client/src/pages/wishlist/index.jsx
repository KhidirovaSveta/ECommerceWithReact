import React from "react";
import "./index.scss";
const Wishlist = ({ wishlist, setWishlist }) => {
  const handleRemove = (id) =>{
    let removed = wishlist.filter((q) => q.id !== id)
    setWishlist(removed)
  }

  return (
    <div className="container">
      <div id="wishlist">
        {wishlist.map((wish) => {
          return (
            <div className="wishlist">
              <img src={wish.img1} alt="" width={"220px"} />
              <div className="info">
              <h2>{wish.name}</h2>
              <h4> Price: <p>£{wish.unitPrice}</p></h4>
                <button className="removeBtn" onClick={() => handleRemove(wish.id)}><i className="fa-solid fa-trash"></i></button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Wishlist;
