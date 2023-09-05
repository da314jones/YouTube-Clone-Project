import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export default function SearchHistory() {
const [searchHistory, setSearchHistory] = useState([]);

useEffect(() => {
    const savedSearchHistory = localStorage.getItem('searchHistory');

    if (savedSearchHistory) {
        setSearchHistory(JSON.parse(savedSearchHistory));
    }
}, [])

useEffect(() => {
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
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
