import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Secret from "./Secret";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="hack-4-pan-2022" element={<App />} />
      <Route path="secret" element={<Secret />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
