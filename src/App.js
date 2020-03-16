import React, { useEffect, Fragment } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import "./App.css";
import SearchBar from "./components/layout/SearchBar";
import Logs from "./components/logs/Logs";
import AddBtn from "./components/layout/AddBtn";
import AddLogModal from "./components/logs/AddLogModal";
import EditLogModal from "./components/logs/EditLogModal";
import AddTechModal from "./components/techs/AddTechModal";
import TechListModal from "./components/techs/TechListModal";

const App = () => {
  useEffect(() => {
    // Initialises Materialize JavaScript
    M.AutoInit();
  });
  return (
    <Fragment>
      <SearchBar></SearchBar>
      <div className="container">
        <AddBtn></AddBtn>
        <AddLogModal></AddLogModal>
        <EditLogModal></EditLogModal>
        <AddTechModal></AddTechModal>
        <TechListModal></TechListModal>
        <Logs></Logs>
      </div>
    </Fragment>
  );
};

export default App;
