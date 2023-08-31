import React from 'react'

export default function IframePlayer({ src, title, width, height }) {
  return (
    <iframe
      src={src}
      title={title}
      width={width}
      height={height}
    >

    </iframe>
  )
}
