import React, { Fragment, useContext } from "react";
import "./Navbar.css";
import "../../../App.css";
import { useHistory } from "react-router-dom";
import AuthContext from "../../../context/auth/AuthContext";
import HomeContext from "../../../context/home/HomeContext";

const Navbar = () => {
  const history = useHistory();
  const authContext = useContext(AuthContext);
  const homeContext = useContext(HomeContext);
  const { setBasketToggle } = homeContext;
  const { isAuthenticated, logOut, cookeAuth, logOutCooke } = authContext;

  const onClick = () => {
    setBasketToggle(true);
  };
  return (
    <div className="nav-con">
      <div className="nav">
        <div className="name-con">
          <div>
            <h1 className="name">
              <span className="emoji">😋</span>M!NTED
            </h1>
          </div>
        </div>
        {localStorage.token ? (
          cookeAuth === true ? (
            <Fragment>
              <div className="burger">
                <div></div>
                <div></div>
                <div></div>
                <span className="list-con">
                  <i
                    className="fas fa-home"
                    onClick={() => history.push("/cooke/home")}
                  ></i>
                  <i
                    className="fab fa-accusoft"
                    onClick={() => history.push("/cooke/orders")}
                  ></i>
                  <i
                    className="fas fa-power-off"
                    onClick={() => logOutCooke()}
                  ></i>
                </span>
              </div>
            </Fragment>
          ) : (
            isAuthenticated === true && (
              <Fragment>
                <div className="burger">
                  <div></div>
                  <div></div>
                  <div></div>
                  <span className="list-con">
                    <i
                      className="fas fa-home"
                      onClick={() => history.push("/user/home")}
                    ></i>
                    <i className="fas fa-shopping-bag"></i>
                    <i
                      className="fas fa-user "
                      onClick={() => history.push("/user/account")}
                    ></i>
                    <i className="fas fa-shopping-basket" onClick={onClick}></i>
                    <i
                      className="fas fa-power-off"
                      onClick={() => logOut()}
                    ></i>
                  </span>
                </div>
              </Fragment>
            )
          )
        ) : (
          <Fragment>
            <div className="burger">
              <div></div>
              <div></div>
              <div></div>
              <span className="list-con">
                <i
                  className="fas fa-home"
                  onClick={() => history.push("/")}
                ></i>
              </span>
            </div>
          </Fragment>
        )}
      </div>
    </div>
  );
};
export default Navbar;
