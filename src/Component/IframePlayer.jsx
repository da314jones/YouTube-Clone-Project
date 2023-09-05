import React from 'react'
import { Ratio } from 'react-bootstrap'
import "./iframePlayer.css"

export default function IframePlayer({ videoId }) {
  const videoUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className='iframe-player-container'>
      <Ratio aspectRatio="16x9">
    <iframe
      src={videoUrl}
      // title={`Youtube Video Player ${videoId}`}
      width={840}
      height={472.5}
      allowFullScreen
      >
      </iframe>
      </Ratio>
    </div>
  )
}