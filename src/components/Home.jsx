import React from "react";
import IframePlayer from "./IframePlayer";
import NavBar from "./NavBar";

const Home = () => {
  return (
    <div>
        <header>
            <h1>You Tube Clone</h1>
            <NavBar />
        </header>
      <IframePlayer />
    </div>
  );
};


export default Home;
