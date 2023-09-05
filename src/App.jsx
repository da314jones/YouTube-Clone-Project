import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  getOneVideo,
  getVideosBySearchQuery,
  getCommentsByVideoId,
} from "../Api/fetch";
import NavBar from "./Component/NavBar";
import SearchBar from "./Component/SearchBar";
import About from "./Component/About";
import Home from "./Component/Home";
import VideoShowPage from "./Component/VideoShowPage";
import VideoThumbNailsList from "./Component/VideoThumbNailsList";
import ErrorNotFound from "./Component/ErrorNotFound";

import "./App.css";

function App() {
  const [showSearchBar, setShowSearchBar] = useState(true);
  const [loadingError, setLoadingError] = useState(false);
  const [videos, setVideos] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (searchQuery.trim() !== "") {
    getVideosBySearchQuery(searchQuery)
    .then(data => {
      setVideos(data.items || []);
    })
    .catch(err => {
      setLoadingError(true);
      console.error("Error fetching videos:", err);
    })}
  },[searchQuery])

  return (
    <Router>
      <div className="container flex flex-col justify-center items-center ">
        <div className="sub-flex">
          <header className="header flex items-center justify-between bg-custom-gray bg-opacity-95">
            <NavBar />
            {showSearchBar && <SearchBar setSearchQuery={setSearchQuery} />}
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
                path="*"
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
            </Routes>
            {loadingError && <p>Error loading videos.</p>}
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
