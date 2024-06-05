import React from "react";
import "./CookePage.css";
import "../../../App.css";
import Profile from "../../pages/cookepage/profile/Profile";
import CookeMenu from "../cookemenu/CookeMenu";

const CookePage = () => {
  return (
    <div className="cookepage-con">
      <div className="header-con">
        <Profile />
      </div>
        <CookeMenu/>
    </div>
  );
};

export default CookePage;
