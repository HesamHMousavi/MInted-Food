import React, { useContext } from "react";
import HomeContext from "../../context/home/HomeContext";
import CartItem from "../cartitem/CartItem";

const CartList = () => {
  const homeContext = useContext(HomeContext);
  const { items } = homeContext;
  return (
    <div>
      {items.map((item) => (
        <CartItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default CartList;
