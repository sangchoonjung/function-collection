import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import "./index.css";
const root = ReactDom.createRoot(document.querySelector("#root") as Element);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
