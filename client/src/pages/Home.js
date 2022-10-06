import React from "react";
import NavBar from "../components/NavBar";


function Home({ setUser }) {


  return (
    <div>
      <NavBar setUser={setUser} />
      <h1>I am the home page</h1>


    </div>
  );
}

export default Home;
