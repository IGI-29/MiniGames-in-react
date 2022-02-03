import React, { useState } from "react";
import Navbar from "./Components/Navbar.js";
import RockPaperScissor from "./Components/RockPaperScissor.js";
import Cards from "./Components/Cards.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Cards />} />
          <Route
            exact
            path="/rockpaperscissor"
            element={<RockPaperScissor />}
          />

          <Route exact path="/cards" element={<Cards />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
