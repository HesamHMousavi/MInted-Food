import React, { useContext } from "react";
import ErrorContext from "../../context/error/ErrorContext";
// import Alert from "./Alert";
import "../../App.css";

const Error = () => {
  const errorContext = useContext(ErrorContext);
  const { errors, alerts } = errorContext;
  return (
    <div className="error">
      {errors.length > 0 &&
        errors.map((err) => (
          <div key={err.id} className="error-item ">
            <h2>{err.msg}</h2>
          </div>
        ))}
      {alerts.length > 0 &&
        alerts.map((alrt) => (
          <div key={alrt.id} className="alert-item">
            <h2>{alrt.msg}</h2>
          </div>
        ))}
    </div>
  );
};

export default Error;
