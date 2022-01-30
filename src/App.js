import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { GlobalReset } from "./Global.styled";
import "./App.css";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Stake from "./pages/Stake";
import Vote from "./pages/Vote";

function App() {
  return (
    <>
      <Router>
        <GlobalReset />
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="products" element={<Products />} />
            <Route path="stake" element={<Stake />} />
            <Route path="vote" element={<Vote />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
