import React from "react";
import ReactDOM from "react-dom";

import List from "./components/List";
import Feeds from "./components/Feeds";

const App = () => {
  return (
    <div className="layout">
      <List />
      <Feeds />
    </div>
  );
};

const wrapper = document.getElementById("App");
wrapper ? ReactDOM.render(<App />, wrapper) : false;
