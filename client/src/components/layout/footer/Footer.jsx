import React from "react";
import "./Footer.css";
const Footer = () => {
  let myStyle = { color: "#fff" };
  const link = "http://localhost:3000/";
  return (
    <div className="footer" style={myStyle}>
      <div className="links-con">
        <div className="links" style={myStyle}>
          <a href={link} style={myStyle}>
            About
          </a>
          <a href={link} style={myStyle}>
            Contact
          </a>
          <a href={link} style={myStyle}>
            Vacanccies
          </a>
          <a href={link} style={myStyle}>
            More{" "}
          </a>
          <a href={link} style={myStyle}>
            Some Link
          </a>
          <a href={link} style={myStyle}>
            API
          </a>
        </div>
      </div>
      <div className="rights">
        <h1>Best Way To Get Your Home Made Food</h1>
        <h3>2021 @ All rights Reserved</h3>
      </div>
      <div className="info" style={myStyle}>
        <h5>Email : M!NTED@gmail.com ✉</h5>
        <h5>Phone : 07472451493 ☎</h5>
        <div>
          <h6>We Global Baby 🌎</h6>
        </div>
      </div>
    </div>
  );
};

export default Footer;
