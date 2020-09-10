import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

if (process.env.REACT_APP_MOCK) {
  console.log("========================================");
  console.log("=============== With MOCK! =============");
  console.log("===== Do not enable in PRODUCTION ======");
  console.log("========================================");
  require("./mocking/mock");
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
