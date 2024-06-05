import React from "react";
import "./PendingOrder.css";
import OrderItem from "../incomingorder/OrderItem";
import "../incomingorder/IncomingOrder.css";

const PendingOrder = () => {
  return (
    <div className="pending-oreder">
      <header className="incoming-order-header">
        <h2>Ordered By : Customer Name</h2>
      </header>
      <div className="incoming-order-main-content">
        <h2 className="oreder">order : </h2>
        <div className="list">
          <ul>
            <OrderItem />
            <OrderItem />
          </ul>
        </div>
        <div className="timings">
          <p>Time Ordered : 19:20</p>
          <p>Expected delivery : 19:50</p>
        </div>
      </div>
    </div>
  );
};

export default PendingOrder;
