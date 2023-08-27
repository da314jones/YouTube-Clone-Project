import React from 'react'
import VideoShowPage from './VideoShowPage'

export default function VideoThumbNailsList({videos}) {
  return (
    <div>
      <VideoShowPage videos={videos}/>
    </div>
  )
}
