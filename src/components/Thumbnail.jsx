import React from 'react'
import { Link } from 'react-router-dom'

export default function ThumbNail({item}) {


    return (
        <div className='thumbnail-item'>
            <Link to={`/videos/${item.id.videoId}`}>
            <img src={item.snippet.thumbnails.default.url} alt={item.snippet.title} />
            </Link>
            <p>{item.snippet.title}</p>
            <p>{item.snippet.description}</p>
           
        </div>
    )
}
