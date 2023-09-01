import React from "react";
import SearchBar from "./SearchBar";
import NavBar from "./NavBar";

export default function TeamInfo() {
  return (
    <>
      <header>
        <NavBar />
        <SearchBar />
      </header>
        <Card>
          Nicole Slater
        </Card>
        <Card>
          Dwayne Jones
        </Card>
        <Card>
          Jefferson Chua
        </Card>
    </>
  );
}
