import React from 'react';
import SearchHistory from './SearchHistory';
import VideoHistory from './ViewedHistory';
import Favorites from './Favorites';
import "./UserPage.css"

export default function UserPage() {
  return (
    <div className='user-container'>
      <h1>User Dashboard</h1>
      <SearchHistory />
      <VideoHistory />
      <Favorites />
    </div>
  );
}
