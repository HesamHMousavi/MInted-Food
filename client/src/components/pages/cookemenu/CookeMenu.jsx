import React from "react";
import MenuItem from "../cookepage/menuitem/MenuItem";
import "./CookeMenu.css";

const CookeMenu = () => {
  return (
    <div className="pad">
      <div className="menu">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </div>
  );
};

export default CookeMenu;
