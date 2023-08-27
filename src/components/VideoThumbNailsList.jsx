import { useState } from 'react'
import ThumbNail from './Thumbnail'

export default function VideoThumbNailsList({videos}) {
  return (
    <div>
      <ThumbNail key={index} videos={videos}/>
    </div>
  )
}
