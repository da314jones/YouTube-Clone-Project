import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import useSearchBarPosition from "./Hooks/hooks";
import "./App.css";
import {
  getOneVideo,
  getVideosBySearchQuery,
  getCommentsByVideoId,
} from "../Api/fetch";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import About from "./Components/About";
import Home from "./Components/Home";
import VideoShowPage from "./Components/VideoShowPage";
import VideoThumbNailsList from "./components/VideoThumbNailsList";

function App() {
const [showSearchBar, setShowSearchBar] = useState(true);
const [loadingError, setLoadingError] = useState(false);
const [videos, setVideos] = useState([]);
const [searchQuery, setSearchQuery] = useState("");
  
useEffect(() => {
    console.log("uesEffect Triggered");
    if (searchQuery) {
      getVideosBySearchQuery(searchQuery)
        .then((data) => {
          console.log("Raw api:", data);
          console.log("Videos by query:", data.items);
          setVideos(data.items);
          setLoadingError(false);
        })
        .catch((err) => {
          setLoadingError(true);
          console.error(err);
        });
    }
  }, [searchQuery]);

  return (
    <Router>
      <div className="container flex flex-col justify-center items-center ">
      <header className="header flex items-center justify-between bg-custom-gray">
        <NavBar />
        {showSearchBar && <SearchBar setSearchQuery={setSearchQuery} />}
      </header>
        <div className="routes">
        <Routes>
        <Route path="/" element={<Home setSearchQuery={setSearchQuery} setShowSearchBar={setShowSearchBar} />} />
        <Route path="/about" element={<About />} />
        <Route path="/videos/:videoId" element={<VideoShowPage />} />
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
    </Router>
  );
}

export default App;
