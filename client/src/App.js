import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/navbar/Navbar";
import Home from "./components/pages/home/Home";
import Footer from "./components/layout/footer/Footer";
import HomeContext from "./context/home/HomeContext";
import AuthState from "./context/auth/AuthState";
import Register from "./components/pages/register/Register";
import Login from "./components/pages/login/Login";
import Overlay from "./components/layout/Overlay";
import CookePage from "./components/pages/cookepage/CookePage";
import UserLogin from "./components/pages/userlogin/UserLogin";
import UserRegister from "./components/pages/userregister/UserRegister";
import Landing from "./components/pages/landing/Landing";
import UserAccount from "./components/pages/useraccount/UserAccount";
import Error from "./components/layout/Error";
import Basket from "./components/basket/Basket";
import UserPasswordReset from "./components/pages/passwordreset/UserPasswordReset";
import NewPassword from "./components/pages/newpassword/NewPassword";
import CookeHome from "./components/pages/cookehome/CookeHome";
import CookeOrders from "./components/pages/cookeorders/CookeOrders";
import CookeState from "./context/CookeContext/CookeState";
import "./App.css";

const App = () => {
  const homeContext = useContext(HomeContext);
  const { basketToggle } = homeContext;
  return (
    <div className="app">
      <Router>
        <AuthState>
          <CookeState>
            {basketToggle && <Overlay />}
            <Navbar />
            <Basket />
            <Error />
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/cooke/register" component={Register} />
              <Route exact path="/cooke/login" component={Login} />
              <Route exaxt path="/cooke/page" component={CookePage} />
              <Route exact path="/cooke/home" component={CookeHome} />
              <Route exact path="/user/home" component={Home} />
              <Route exact path="/user/login" component={UserLogin} />
              <Route exact path="/user/register" component={UserRegister} />
              <Route exact path="/user/account" component={UserAccount} />
              <Route
                exaxt
                path="/user/passwordreset"
                component={UserPasswordReset}
              />
              <Route
                exaxt
                path="/api/users/passwordreset/:id/:token"
                component={NewPassword}
              />
              <Route exact path="/cooke/orders" component={CookeOrders} />
            </Switch>
            <Footer />
          </CookeState>
        </AuthState>
      </Router>
    </div>
  );
};

export default App;
