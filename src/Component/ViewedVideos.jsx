import React, { useState, UseEffect } from 'react'
import { BrowserRouter } from 'react-router-dom';

export default function ViewedVideos() {
    const [videoViewedHistory, setVideoViewedHistory] = useState([]);

    useEffect(() => {
        const savedVideoViewedHistory = localStorage.getItem('searchHistory');
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
      {videoViewed.map((item) => (
        <li key={video.id}>
            <img src={video.thumbnailUrl} alt={`Thumbnail for ${video.title}`} />
        <span>{video.title}</span>
        </li>
      ))}
      </ul>
    </div>
  )
}
