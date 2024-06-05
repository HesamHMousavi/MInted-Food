import React from "react";
import "../../../App.css";
import "./Landing.css";
import { useHistory } from "react-router-dom";
import Card from "./Card";

const Landing = () => {
  const history = useHistory();
  const userArr = [
    "Buy Food From Cookes Online",
    "Get Food Deliverd",
    "Easy To Access Cookes In Your Area",
    "Be Able To View A Range Of Cookes And Thier Menues",
  ];
  const cookeArr = [
    "Create Your Best Meals",
    "Sell Your Most Creative Food To Customers",
    "Show The World Your Talent By Your Cooking",
    "Control Your Online Status",
    "Set Your Own Working Houers",
  ];
  return (
    <div className="container2" style={{ background: "#222" }}>
      <div className="landing">
        <div className="text">
          <h1 className="header-text">WELCOM TO M!NTED</h1>
          <p>
            The Place Where You Can Find The Best <br />
            Home-Made Food / Desserts / Drinks
          </p>
        </div>
        <div className="btns-container">
          <div className="btns">
            <button
              className="btn btn-order"
              onClick={() => history.push("/user/login")}
            >
              Log in
            </button>
            <button
              className="btn btn-view"
              onClick={() => history.push("/cooke/login")}
            >
              Cooke Login
            </button>
            <button
              className="btn btn-order"
              onClick={() => history.push("/user/register")}
            >
              Register
            </button>
            <button
              className="btn btn-view"
              onClick={() => history.push("/cooke/register")}
            >
              Cooke Register
            </button>
          </div>
        </div>
      </div>
      <div className="cards-con">
        <Card title="Customer" arr={userArr} />
        <Card title="Cooke" arr={cookeArr} />
      </div>
      <div className="prev-title">
        <h1>Some Of The Creative Food Made By Our Cookes</h1>
      </div>
      <div className="img-con">
        <img
          src="https://www.bruker.com/en/applications/microbiology-and-diagnostics/food-beverage-microbiology/_jcr_content/root/herostage/backgroundImageVPS.coreimg.82.1920.jpeg/1605539763412/food-and-beverage-bruker-md-website.jpeg"
          alt=""
        />
        <img
          src="https://www.bruker.com/en/applications/microbiology-and-diagnostics/food-beverage-microbiology/_jcr_content/root/herostage/backgroundImageVPS.coreimg.82.1920.jpeg/1605539763412/food-and-beverage-bruker-md-website.jpeg"
          alt=""
        />
        <img
          src="https://www.bruker.com/en/applications/microbiology-and-diagnostics/food-beverage-microbiology/_jcr_content/root/herostage/backgroundImageVPS.coreimg.82.1920.jpeg/1605539763412/food-and-beverage-bruker-md-website.jpeg"
          alt=""
        />
        <img
          src="https://www.bruker.com/en/applications/microbiology-and-diagnostics/food-beverage-microbiology/_jcr_content/root/herostage/backgroundImageVPS.coreimg.82.1920.jpeg/1605539763412/food-and-beverage-bruker-md-website.jpeg"
          alt=""
        />
        <img
          src="https://www.bruker.com/en/applications/microbiology-and-diagnostics/food-beverage-microbiology/_jcr_content/root/herostage/backgroundImageVPS.coreimg.82.1920.jpeg/1605539763412/food-and-beverage-bruker-md-website.jpeg"
          alt=""
        />
        <img
          src="https://www.bruker.com/en/applications/microbiology-and-diagnostics/food-beverage-microbiology/_jcr_content/root/herostage/backgroundImageVPS.coreimg.82.1920.jpeg/1605539763412/food-and-beverage-bruker-md-website.jpeg"
          alt=""
        />
        <img
          src="https://www.bruker.com/en/applications/microbiology-and-diagnostics/food-beverage-microbiology/_jcr_content/root/herostage/backgroundImageVPS.coreimg.82.1920.jpeg/1605539763412/food-and-beverage-bruker-md-website.jpeg"
          alt=""
        />
        <img
          src="https://www.bruker.com/en/applications/microbiology-and-diagnostics/food-beverage-microbiology/_jcr_content/root/herostage/backgroundImageVPS.coreimg.82.1920.jpeg/1605539763412/food-and-beverage-bruker-md-website.jpeg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Landing;
