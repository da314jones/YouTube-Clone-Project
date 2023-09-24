import { useState, useEffect } from "react";
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  getOneVideo,
  getVideosBySearchQuery,
  getCommentsByVideoId,
} from "../Api/fetch";
import { Image } from "react-bootstrap";
import NavBar from "./Component/NavBar";
import SearchBar from "./Component/SearchBar";
import About from "./Component/About";
import Home from "./Component/Home";
import VideoShowPage from "./Component/VideoShowPage";
import VideoThumbNailsList from "./Component/VideoThumbNailsList";
import ErrorNotFound from "./Component/ErrorNotFound";
import "./App.css";
import ViewedVideos from "./Component/ViewedHistory";
import UserPage from "./Component/UserPage";
import SearchHistory from "./Component/SearchHistory";
import Favorites from "./Component/Favorites";

function App() {
  console.log("App rendered")
  const [showSearchBar, setShowSearchBar] = useState(true);
  const [loadingError, setLoadingError] = useState(false);
  const [videos, setVideos] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [fetchData, setFetchData] = useState(true);

   useEffect(() => {
    if (fetchData && searchQuery.trim() !== "") {
      getVideosBySearchQuery(searchQuery)
      .then(data => {
        setVideos(data.items || []);
      })
      .catch(err => {
        setLoadingError(true);
        console.error("Error fetching videos:", err);
      });
    }
  }, [searchQuery, fetchData]);

const handleUserIcon = () => {
  window.location.href = '/user';
}



  return (
    <Router>
      <div className="container flex flex-col justify-center items-center split-background-horizontal">
        <div className="sub-flex">
          <header className="header flex items-center justify-between bg-custom-gray bg-opacity-95">
            <NavBar />
            {showSearchBar && <SearchBar setSearchQuery={setSearchQuery} />}
            <Image
          className="user-icon"
           src="/user-icon.png" 
          alt="user-icon"
          onClick={handleUserIcon}
          style={{cursor: 'pointer'}} />
          </header>
          <div className="routes">
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    setSearchQuery={setSearchQuery}
                    setShowSearchBar={setShowSearchBar}
                  />
                }
              />
              <Route path="/about" className="flex" element={<About />} />
              <Route path="/video/:videoId" element={<VideoShowPage />} />
              <Route
                path="/error"
                element={
                  <ErrorNotFound
                    setShowSearchBar={setShowSearchBar}
                    setSearchQuery={setSearchQuery}
                  />
                }
              />
              <Route
                path="/thumbnails"
                element={
                  <VideoThumbNailsList
                  items={videos}
                  setSearchQuery={setSearchQuery}
                  />
                }
              />
              <Route
                path="/user"
                element={
                  <UserPage
                  />
                }
              />
              <Route
                path="/search-history"
                element={
                  <SearchHistory
                  />
                }
              />
              <Route
                path="/viewed-videos"
                element={
                  <ViewedVideos
                  />
                }
              />
              <Route
                path="/favorites"
                element={
                  <Favorites
                  />
                }
              />
                <Route
                  path="*"
                  element={
                    <ErrorNotFound
                      setShowSearchBar={setShowSearchBar}
                      setSearchQuery={setSearchQuery}
                    />
                  }
                />
            </Routes>
            {loadingError && <p>Error loading videos.</p>}
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
