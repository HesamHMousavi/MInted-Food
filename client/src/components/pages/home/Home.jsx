import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router";
import "../../../App.css";
import "./Home.css";
import AuthContext from "../../../context/auth/AuthContext";
import HomeContext from "../../../context/home/HomeContext";
import Search from "../../search/Search";
import CardList from "../../cardList/CardList";
import Loading from "../../layout/Loading";

const Home = () => {
  const history = useHistory();
  const authContext = useContext(AuthContext);
  const { loadUser, checkAuth } = authContext;
  const { loading } = HomeContext;
  useEffect(() => {
    const type = checkAuth();
    async function fetchData() {
      if (localStorage.token && type === "user") await loadUser();
      else history.push("/");
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return loading ? (
    <Loading />
  ) : (
    <div style={{ background: "#222" }}>
      <div className="container mg-1">
        <Search />
        <CardList />
      </div>
    </div>
  );
};

export default Home;
