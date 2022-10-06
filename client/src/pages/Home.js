import React from "react";

function Home({setUser}) {
  function handleClick(e) {
    fetch("/logout", {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <div>
      <h1>I am the home page</h1>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
}

export default Home;
