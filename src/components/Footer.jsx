import React from "react";
import SearchBar from "./SearchBar";
import './Footer.css'


export default function Footer({setSearchQuery}) {
  return (
    <div className="footer bg-custom-gray">
      <SearchBar setSearchQuery={setSearchQuery} />
    </div>
  );
}
