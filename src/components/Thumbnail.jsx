import React from 'react'

export default function ThumbNail({item}) {

    return (
        <div className='thumbnail-item'>
            <img src={item.snippet.thumbnails.default.url} alt={item.snippet.title} />
            <p>{item.snippet.title}</p>
        </div>
    )
}
