import React from "react";
import SearchBar from "./SearchBar";
import NavBar from "./NavBar";

export default function TeamInfo() {
  return (
    <div>
      <header>
        <NavBar />
        <SearchBar />
        <Card>
          Nicole Slater
        </Card>
        <Card>
          Dwayne Jones
        </Card>
        <Card>
          Jefferson Chua
        </Card>
      </header>
    </div>
  );
}
