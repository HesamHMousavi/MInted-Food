import React, { useContext } from "react";
import Card from "../card/Card";
import "./CardList.css";
import "../../App.css";
import HomeContext from "../../context/home/HomeContext";

const CardList = () => {
  const homeContext = useContext(HomeContext);
  const { filtered, foodProv } = homeContext;
  let ele;
  if (filtered === null) {
    ele = foodProv.map((element) => (
      <Card element={element} key={element.id} />
    ));
  } else if (filtered.length > 0) {
    ele = filtered.map((element) => (
      <Card element={element} key={element.id} />
    ));
  } else if (filtered.length === 0) {
    ele = (
      <div className="ops">
        <h1>No Match Was Found... </h1>
      </div>
    );
  }
  return <div className="cardlist mg-1">{ele}</div>;
};

export default CardList;
