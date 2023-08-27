import React from 'react'

export default function IframePlayer({videos}) {
  return (
    <iframe
    width="480"
    height="270"
    src={videos}
    frameborder="0"
    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
    allowFullScreen
    ></iframe>
  )
}
