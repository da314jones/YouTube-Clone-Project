import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Favorites.css"

export default function Favorites() {
  const [favoriteVideos, setFavoriteVideos] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    setFavoriteVideos(storedFavorites);
  }, []);
 

  const handleRemoveFavorite = (videoId) => {
    const updatedFavorites = favoriteVideos.filter(
      (video) => video.id !== videoId
    );
    setFavoriteVideos(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="favorite-container">
      <h2 className="bg-custom-gray-500 text-black text-xl">Favorites</h2>
      <ul>
        {favoriteVideos.map((video, index) => (
          <li key={index}>
            <Link
              to={`/video/${video.id}`}>
              {video.title || `Favorite Video ${index + 1}`}{" "}
            </Link>
            <button onClick={() => handleRemoveFavorite(video.id)}>
              Remove from Favorites
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
