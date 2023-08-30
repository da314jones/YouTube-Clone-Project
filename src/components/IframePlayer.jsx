import React from 'react'

export default function IframePlayer({videoSrc}) {
  return (
    <iframe id="player" type="text/html" width="640" height="390"
  src={`http://www.youtube.com/embed/ZTJR-YTutaM?enablejsapi=1&origin=http://example.com`}
  frameBorder="0">

  </iframe>
  )
}
