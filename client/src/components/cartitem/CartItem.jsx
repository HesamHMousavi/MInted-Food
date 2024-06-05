import React, { useContext, useState, useEffect } from "react";
import HomeContext from "../../context/home/HomeContext";
import "./CartItem.css";
import "../../App.css";

const CartItem = ({ item }) => {
  const homeContext = useContext(HomeContext);
  const { updateCount } = homeContext;
  const [count2, setCount] = useState(1);
  useEffect(() => {
    if (item) {
      updateCount(item.id, count2);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count2]);
  const y = () => {
    setCount(count2 + 1);
  };
  const z = () => {
    setCount(count2 - 1);
  };
  const x =
    "https://media.istockphoto.com/photos/top-view-table-full-of-food-picture-id1220017909?b=1&k=6&m=1220017909&s=170667a&w=0&h=yqVHUpGRq-vldcbdMjSbaDV9j52Vq8AaGUNpYBGklXs=";
  return (
    <div className="cart-item shadow-dark">
      <img src={x} alt="" />
      <div className="cart-item-info">
        <div className="left">
          <h3>{item ? item.title : ""}</h3>
          <p>Price: {item ? item.price : ""} </p>
          <button
            style={{
              cursor: "pointer",
              textAlign: "start",
              background: "transparent",
              border: "none",
              color: "#fff",
            }}
          >
            Remove Item
          </button>
        </div>
        <div className="right">
          <i className="fas fa-arrow-up" onClick={y}></i>
          <h4>{item ? item.count : ""}</h4>
          <i className="fas fa-arrow-down" onClick={z}></i>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
