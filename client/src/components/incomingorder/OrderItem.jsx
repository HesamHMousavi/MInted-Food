import React from "react";
import "./IncomingOrder.css";

const OrderItem = () => {
  const link =
    "https://media.istockphoto.com/photos/top-view-table-full-of-food-picture-id1220017909?b=1&k=6&m=1220017909&s=170667a&w=0&h=yqVHUpGRq-vldcbdMjSbaDV9j52Vq8AaGUNpYBGklXs=";
  return (
    <li>
      <img src={link} alt="" />
      <p>2x</p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat quis
        laborum nostrum assumenda distinctio tenetur rerum et, illo
      </p>
    </li>
  );
};

export default OrderItem;
