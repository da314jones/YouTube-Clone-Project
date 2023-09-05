import React from "react";
import { Link } from "react-router-dom";
import SearchHistory from "./SearchHistory";
import ViewedVideos from "./ViewedVideos";
import Favorites from "./Favorites";

export default function UserPage() {
  return (
    <div className="user-container">
      <h1>User Dashboard</h1>
      <section className="search-history-section">
        <h2>Recent Searches</h2>
        <Link to="search-history">View Search History</Link>
      </section>
      <section className="viewed-videos-section">
        <h2>Recently Viewed Videos</h2>
        <Link to="viewed-videos">Recently Viewed Videos</Link>
      </section>
      <section className="favorites-section">
        <h2>Favorite</h2>
        <Link to="favorites">Favorites</Link>
      </section>
    </div>
  );
}
