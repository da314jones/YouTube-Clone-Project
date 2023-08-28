<<<<<<< HEAD
import React from 'react';
import IframePlayer from './IframePlayer';

const Home = () => {
    return (
        <div>
            <IframePlayer />
        </div>
    );
}
=======
import React from "react";
import IframePlayer from "./IframePlyer";
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
>>>>>>> djones

export default Home;
