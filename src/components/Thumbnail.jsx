import React from 'react'

export default function ThumbNail({videos}) {

    return (
        <div className='thumbnail'>
            <img src={video.thumbnailUrl} alt={video.title} />
            <p>{videos.title}</p>
        </div>
    )
}
