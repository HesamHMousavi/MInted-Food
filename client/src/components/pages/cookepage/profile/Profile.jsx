import React, { useContext } from "react";
import "./Profile.css";
import "../../../../App.css";
import HomeContext from "../../../../context/home/HomeContext";

const Profile = () => {
  const homeContext = useContext(HomeContext);
  const { currentCooke } = homeContext;
  const { name, img, status, address, totalReview } = currentCooke[0];
  return (
    <div className="header shadow-dark">
      <img src={img} alt="" />
      <div className="stats">
        <h4>Cooke : {name}</h4>
        <h4>
          Status :{" "}
          {status ? (
            <i className="fas fa-check-circle" style={{ color: "springgreen" }}>
              {" "}
            </i>
          ) : (
            <i className="far fa-times-circle" style={{ color: "red" }}></i>
          )}
        </h4>
        <h4>Collection Address : {address}</h4>
        <h4>Reviews : ⭐ ⭐ ⭐ ⭐ ⭐ ( {totalReview} )</h4>
        <h4>
          About : Hesam Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Ut molestiae, dicta qui iste perferendis nesciunt Lorem, ipsum
          dolor sit amet consectetur adipisicing elit. Dolorem quod optio facere
          tempora atque ratione excepturi, est consequuntur?
        </h4>
      </div>
    </div>
  );
};

export default Profile;
