import React, { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import "./App.css";

const App = () => {
  useEffect(() => {
    // Initialises Materialize JavaScript
    M.AutoInit();
  });
  return (
    <div className="App">
      <h1>My App</h1>
    </div>
  );
};

export default App;
