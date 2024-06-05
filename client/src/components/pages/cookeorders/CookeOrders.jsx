import React from "react";
import PendingOrder from "../../pendingorder/PendingOrder";
import "./CookeOrders.css";

const CookeOrders = () => {
  return (
    <div className="pending-orders">
      <div className="head-con">
        <h1>Pending Orders</h1>
        <h4>Total Ordres : 10</h4>
      </div>
      <PendingOrder />
      <PendingOrder />
      <PendingOrder />
    </div>
  );
};

export default CookeOrders;
