import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import { GlobalReset } from "./Global.styled";
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <GlobalReset />
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="products" element={<p>storbxbxbxes</p>} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
