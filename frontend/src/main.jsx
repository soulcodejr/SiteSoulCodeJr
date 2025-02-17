import React from "react";
import {Route} from "react-router-dom"
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./assets/css/index.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Duvidas from "./components/Duvidas";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <App />
    <Duvidas />
    <Footer />
  </React.StrictMode>
);
