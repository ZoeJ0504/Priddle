import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import Login from "./Login";

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
      {user ? <Home user={user} /> : <Login setUser={setUser} />}
    </div>
  );
}

export default App;
