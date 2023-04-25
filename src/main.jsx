import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import cars from "./cars";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
    <App cars={cars} />
  </React.StrictMode>
);
