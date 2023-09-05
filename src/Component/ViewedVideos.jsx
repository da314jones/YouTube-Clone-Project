import React, { useState, UseEffect } from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function ViewedVideos() {
    const [videoViewedHistory, setVideoViewedHistory] = useState([]);

    useEffect(() => {
        const savedVideoViewedHistory = localStorage.getItem('videoViewedHistory');
        if (savedVideoViewedHistory) {
            setVideoViewedHistory(JSON.parse(savedVideoViewedHistory));
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('videoViewedHistory', JSON.stringify(videoViewedHistory));
    }, [videoViewedHistory])
    

  return (
    <div>
        <h2>Previously Viewed Video</h2>
        <ul>
      {videoViewedHistory.map((item) => (
        <li key={item.id}>
            <img src={item.thumbnailUrl} alt={`Thumbnail for ${video.title}`} />
        <span>{video.title}</span>
        </li>
      ))}
      </ul>
    </div>
  )
}
