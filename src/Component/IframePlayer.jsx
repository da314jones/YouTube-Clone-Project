import React from 'react'
import { Ratio } from 'react-bootstrap'

export default function IframePlayer({ videoId }) {
  const videoUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className='iframe-player-container'>
      <Ratio aspectRatio="16x9">
    <iframe
      src={videoUrl}
      title={`Youtube Video Player ${videoId}`}
      width={560}
      height={315}
      allowFullScreen
      frameBorder="4"
      >
      </iframe>
      </Ratio>
    </div>
  )
}