import React, { useEffect, Fragment } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import "./App.css";
import SearchBar from "./components/layout/SearchBar";
import Logs from "./components/logs/Logs";
import LogItem from "./components/logs/LogItem";

const App = () => {
  useEffect(() => {
    // Initialises Materialize JavaScript
    M.AutoInit();
  });
  return (
    <Fragment>
      <SearchBar></SearchBar>
      <div className="container">
        <Logs></Logs>
      </div>
    </Fragment>
  );
};

export default App;
