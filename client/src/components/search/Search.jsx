import React, { useContext } from "react";
import "./Search.css";
import "../../App.css";
import HomeContext from "../../context/home/HomeContext";

const Search = () => {
  const homeContext = useContext(HomeContext);
  const { setSearch, search } = homeContext;
  const onChange = (e) => {
    setSearch(e.target.value);
    search(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search Cooke..."
        className="search"
        onChange={onChange}
      />
    </div>
  );
};

export default Search;
