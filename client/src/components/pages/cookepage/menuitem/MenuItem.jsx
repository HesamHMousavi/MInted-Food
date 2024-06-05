import React from "react";
import "./MenuItem.css";
import "../../../../App.css";

const MenuItem = () => {
  return (
    <div className="menu-item shadow-dark">
      <img
        src="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/nourish_site_front_other/%201800x1200_raw_foods_diet_other.jpg"
        alt=""
      />
      <div className="stats stats-con">
        <h4>Name : Ma7roo3 A9b3a</h4>
        <h4>
          Description : Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Aliquam, quam nesciunt? Fugit Lorem ipsum dolor sit amet.{" "}
        </h4>
      </div>
      <div className="btn-con">
        <h4>$9.99 </h4>
        <button className="btn btn-view">Add To Cart</button>
      </div>
    </div>
  );
};

export default MenuItem;
