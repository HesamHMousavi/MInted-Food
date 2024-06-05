import React, { useContext } from "react";
import "../../App.css";
import HomeContext from "../../context/home/HomeContext";

const Overlay = () => {
  const homeContext = useContext(HomeContext);
  const { setBasketToggle } = homeContext;
  return <div className="overlay" onClick={() => setBasketToggle(false)}></div>;
};

export default Overlay;
