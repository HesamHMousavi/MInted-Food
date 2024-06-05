import React from "react";
import "./Landing.css";

const Card = ({ title, arr }) => {
  const styleGreen = {
    background: "var(--green-color)",
    color: "#333",
  };
  const styleBlue = {
    background: "var(--blue-color)",
  };
  return (
    <div
      className="landing-card"
      style={
        title === "Cooke"
          ? { borderTop: "5px solid var(--blue-color)" }
          : { borderTop: "5px solid var(--green-color)" }
      }
    >
      <h1 style={title === "Cooke" ? styleBlue : styleGreen}>{title}</h1>
      <div className="hr"></div>
      {arr.map((text, id) => (
        <p key={id}>
          <i
            className="far fa-check-circle"
            style={
              title === "Cooke"
                ? { color: "var(--blue-color)" }
                : { color: "var(--green-color)" }
            }
          />
          {text}
        </p>
      ))}
    </div>
  );
};

export default Card;
