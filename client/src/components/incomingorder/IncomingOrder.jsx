import React from "react";
import "./IncomingOrder.css";
import OrderItem from "./OrderItem";

const IncomingOrder = () => {
  return (
    <div className="incoming-order">
      <header className="incoming-order-header">
        <h2>Ordered By : Customer Name</h2>
        <h4>Time Ordered</h4>
      </header>
      <div className="incoming-order-main-content">
        <h2 className="oreder">order : </h2>
        <div className="list">
          <ul>
            <OrderItem />
            <OrderItem />
          </ul>
          <div className="btn-con">
            <button className="btn btn-accept"> Accept</button>
            <button className="btn btn-reject">Reject</button>
          </div>
        </div>
      </div>
      <div className="customer-comment">
        <h2>Customer Comment</h2>
        <p>This is customer comment can you please put in seperate suaces</p>
      </div>
    </div>
  );
};

export default IncomingOrder;
