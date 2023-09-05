import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import SearchHistory from './SearchHistory'
import ViewedVideos from './ViewedVideos'
import Favorites from './Favorites'

export default function User() {
  return (
    <div className='user-container'>
        <h1>User Dashboard</h1>
        <section className='search-history-section'>
            <h2>SearchHistory</h2>
            <SearchHistory />
        </section>
        <section className='viewed-videos-section'>
            <h2>Previously Viewed Videos</h2>
            <ViewedVideos />
        </section>
        <section className='favorites-section'>
            <h2>Favorite Videos</h2>
            <Favorites />
        </section>
      
    </div>
  )
}
