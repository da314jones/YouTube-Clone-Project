import React, { useState, useEffect } from 'react'

export default function Favorites() {
    const [favorites, setFavorites] = useState([]);
    
    useEffect(() => {
        const savedFavorites = localStorage.getItem('favorites');
    
        if (savedFavorites) {
            setFavorites(JSON.parse(savedFavorites));
        }
    }, [])
    
    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites])

  return (
    <div>
        <h2>Favorite Videos</h2>
        <ul>
      {favorites.map((video) => (
        <li key={video.id}>
            <img src={video.thumbnailUrl} alt={`thumbnail for ${video.title}`} />
        <span>{video.title}</span>
        </li>
        ))}
        </ul>
    </div>
  )
}
