import React, { useState, useEffect } from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function ViewedVideos() {
    const [videoHistory, setVideoHistory] = useState([]);

    useEffect(() => {
        const savedVideoHistory = localStorage.getItem('videoViewedHistory');
        if (savedVideoHistory) {
            setVideoHistory(JSON.parse(savedVideoHistory));
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('videoViewedHistory', JSON.stringify(videoViewedHistory));
    }, [videoViewedHistory])
    

  return (
    <div>
        <h2>Previously Viewed Video</h2>
        <ul>
      {videoHistory.map((video) => (
        <li key={video.id}>
            <img src={video.thumbnailUrl} alt={`Thumbnail for ${video.title}`} />
        <span>{video.title}</span>
        </li>
      ))}
      </ul>
    </div>
  )
}
