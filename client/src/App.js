import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import Login from "./Login";
import { Routes, Route } from "react-router-dom"
import Riddle from "./pages/Riddle"
import SpotDifference from "./pages/SpotDifference";
import ThreeDPuzzles from "./pages/ThreeDPuzzle";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <div className="App">
      {user ? (
        <Home user={user} setUser={setUser} />
      ) : (
        <Login setUser={setUser} />
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/riddles" element={<Riddle />} />
        <Route path="/spot_the_difference" element={<SpotDifference />} />
        <Route path="/3d_puzzle" element={<ThreeDPuzzles />} />
      </Routes>
    </div>
  );
}

export default App;
