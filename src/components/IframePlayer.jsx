import React from 'react'
import { Ratio } from 'react-bootstrap'

export default function IframePlayer({ src, title, width, height }) {
  return (
    <div style={{ width: '100%', height: 'auto' }}>
      <Ratio aspectRatio="16x9">
    <iframe
      src={src}
      title={title}
      width={100}
      height={100}
      allowFullScreen
    />
      </Ratio>
    </div>
  )
}
