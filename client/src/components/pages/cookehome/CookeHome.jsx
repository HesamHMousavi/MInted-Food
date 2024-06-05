import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router";
import IncomingOrder from "../../incomingorder/IncomingOrder";
import CookeContext from "../../../context/CookeContext/CookeContext";
import AuthContext from "../../../context/auth/AuthContext";
import "./CookeHome.css";
import "../../../App.css";

const CookeHome = () => {
  const authContext = useContext(AuthContext);
  const cookeContext = useContext(CookeContext);
  const { incomingOrders } = cookeContext;
  const { loadCooke, checkAuth } = authContext;
  const history = useHistory();
  useEffect(() => {
    const type = checkAuth();
    async function fetchData() {
      if (localStorage.token && type === "cooke") await loadCooke();
      else history.push("/");
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="incoming-orders">
      <div className="head-con">
        <h1>Incoming orderes</h1>
        <h4>Total Orders : {incomingOrders.length}</h4>
      </div>
      {incomingOrders.map((order, id) => (
        <IncomingOrder key={id} />
      ))}
    </div>
  );
};

export default CookeHome;
