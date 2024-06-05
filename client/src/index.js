import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import HomeState from "./context/home/HomeState";
import ErrorState from "./context/error/ErrorState";

ReactDOM.render(
  <React.StrictMode>
    <ErrorState>
      <HomeState>
        <App />
      </HomeState>
    </ErrorState>
  </React.StrictMode>,
  document.getElementById("root")
);
