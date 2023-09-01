import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useSearchBarPosition from "./hooks/hooks";
import "./App.css";
import {
  getOneVideo,
  getVideosBySearchQuery,
  getCommentsByVideoId,
} from "../Api/fetch";
import About from "./components/About";
import Home from "./components/Home";
import VideoShowPage from "./components/VideoShowPage";
import VideoThumbNailsList from "./components/VideoThumbNailsList";

function App() {
  // const position = useSearchBarPosition();
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
      <div className="">
        {/* {!isHomePage && <header className="w-full"><Navbar /><SearchBar setSearchQuery={setSearchQuery} /> </header>} */}
      <Routes>
        <Route path="/" element={<Home setSearchQuery={setSearchQuery} />} />
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
      {/* {isHomePage && <footer className="w-full"><SearchBar setSearchQuery={setSearchQuery} /> </footer>} */}
      {loadingError && <p>Error loading videos.</p>}
      </div>
    </Router>
  );
}

export default App;
