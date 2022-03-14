import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AsideProvider } from "./context/aside-context";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AsideProvider>
        <App />
      </AsideProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
