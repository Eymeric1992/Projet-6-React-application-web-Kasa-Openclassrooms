import React from "react";
import ReactDOM from "react-dom/client";
import "../src/styles/index.css";
import Home from "./pages/Home/Home.jsx";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Apropos from "./pages/Apropos/Apropos";
import PageErreur from "./pages/404/PageErreur";
import FicheLogement from "./pages/FicheLogement/FicheLogement";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/FicheLogement/:id" element={<FicheLogement />} />
      <Route path="/Apropos" element={<Apropos />} />
      <Route path="/*" element={<PageErreur />} />
    </Routes>
  </BrowserRouter>
);
