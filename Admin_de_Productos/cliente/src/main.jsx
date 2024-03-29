import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./Home";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import Details from "./Details";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Home />
      <Details />
    </BrowserRouter>
  </React.StrictMode>
);
