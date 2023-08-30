import { useState } from 'react'
import ThumbNail from './Thumbnail'


export default function VideoThumbNailsList({items}) {
  console.log(items)

  return (
    <div className='thumbnail-list'>
      {items.map((item, index) => (
        <ThumbNail key={item.id.videoId} item={item}/>
      ))}
    </div>
  )
}
