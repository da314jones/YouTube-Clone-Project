import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import "./ViewedHistory.css"

export default function VideoHistory() {
  const [videoHistory, setVideoHistory] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedHistory = JSON.parse(
      localStorage.getItem("videoViewedHistory") || "[]"
    );
    setVideoHistory(storedHistory);
  }, []);



 

  return (
    <div className='viewed-container'>
      <h2 className=' text-black text-xl'>Video History</h2>
      {videoHistory.length === 0 ? (
        <p>No video history available.</p>
        ) : (
      <ul >
        {videoHistory.map((video, index) => (
          <li className="video-history text-black" key={index}>
            <Link to={`/video/${video.id}`} >
             {video.title || `Viewed Video ${index + 1}`}{" "}
            </Link>
          </li>
        ))}
      </ul>
        )}
    </div>
  );
}


