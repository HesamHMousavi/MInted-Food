import React ,{useContext}from "react";
import {useHistory} from "react-router-dom"
import HomeContext from "../../context/home/HomeContext";
import "./Card.css";
import "../../App.css";

const Card = ({element: {name, status, address, review ,totalReview,img , id }}) => {
  const history = useHistory();
  const homeContext = useContext(HomeContext)
  const {setCurrentCooke} =homeContext
  const onClick = () => {
    setCurrentCooke(id)
    history.push("/cooke/page")
  }
  const stars = (num) => {
    let rev="";
    for (let i = 0; i < num; i++) {
      rev += "⭐";
    }
    return rev;
  };
  return (
    <div className="card">
      <img src={img} alt="" />
      <div className="con">
        <div className="stats">
          <div>Cooke : {name}</div>
          <div>
            Status : {" "}
            {status ? (
              <i
                className="fas fa-check-circle"
                style={{ color: "springgreen" }}
              />
            ) : (
              <i className="far fa-times-circle" style={{ color: "red" }}></i>
            )}
          </div>
          <div>Address : {address}</div>
          <div>Review : {stars(review)} ({totalReview})</div>
        </div>
        <div className="btn-container">
          <button className="btn btn-view" onClick={onClick}>View</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
