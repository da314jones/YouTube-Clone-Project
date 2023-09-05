import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";

export default function SearchHistory() {
const [searchHistory, setSearchHistory] = useState([]);

useEffect(() => {
    const savedSearchHistory = localStorage.getItem('searchHistory');

    if (savedSearchHistory) {
        setSearchHistory(JSON.parse(savedSearchHistory));
    }
}, [])

useEffect(() => {
    localStorage.setItem('SearchHistory', JSON.stringify(SearchHistory));
}, [searchHistory])

  return (
    <div>
      {searchHistory.map((item) => (
        <div key={item.searchTerm}>
          <img src={item.firstResultThumbnail} alt="Thumbnail" />
          <span>{item.searchTerm}</span>
        </div>
      ))}
    </div>
  );
}
