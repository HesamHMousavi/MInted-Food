import React, { useContext } from "react";
import HomeContext from "../../context/home/HomeContext";
import "./Basket.css";
import CartList from "../cartlist/CartList";

const Basket = () => {
  const homeContext = useContext(HomeContext);
  const { basketToggle, setBasketToggle, total, claTotal, items } = homeContext;
  return (
    <div
      className="basket"
      style={basketToggle ? { right: "0" } : { right: "-320px" }}
    >
      <div className="title">
        <i
          className="fas fa-sign-out-alt exit-btn"
          onClick={() => setBasketToggle(false)}
        ></i>
        <h1>Order Cart</h1>
      </div>
      <div className="main-content">
        {items.length > 0 ? (
          <CartList />
        ) : (
          <div className="no-orders">
            <h1>No Orders...</h1>
          </div>
        )}
      </div>
      {items.length > 0 && (
        <div className="check-out">
          <h1>Total : £{total}</h1>
          <button className="btn btn-view" onClick={() => claTotal()}>
            Check Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Basket;
