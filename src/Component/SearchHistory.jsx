import React, { useState, useEffect } from "react";

export default function SearchHistory() {
const [searchHistory, setSearchHistory] = useState([]);
const [videoViewedHistory, setVideoViewedHistory] = useState([]);
const [favorites, setFavorites] = useState([]);

useEffect(() => {
    const savedSearchHistory = localStorage.getItem('searchHistory');
    const savedVideoViewedHistory = localStorage.getItem('searchHistory');
    const savedFavorites = localStorage.getItem('favorites');

    if (savedSearchHistory) {
        setSearchHistory(JSON.parse(savedSearchHistory));
    }

    if (savedVideoViewedHistory) {
        setVideoViewedHistory(JSON.parse(savedVideoViewedHistory));
    }

    if (savedFavorites) {
        setFavorites(JSON.parse(savedFavorites));
    }
}, [])


useEffect(() => {
    localStorage.getItem('favorites', JSON.stringify(favorites));
    localStorage.getItem('videoViewedHistory', JSON.stringify(videoViewedHistory));
    localStorage.getItem('savedFavorites', JSON.stringify(videoViewedHistory));
}, [searchHistory, videoViewedHistory, favorites])

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
