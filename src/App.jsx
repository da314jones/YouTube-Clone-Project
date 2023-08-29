import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import { getAllVideos } from '../Api/fetch';
import About from './components/About';
import CommentsForm from './components/CommentsForm';
import CommentsList from './components/CommentsList';
import Home from './components/Home';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import TeamInfo from './components/TeamInfo';
import VideoShowPage from './components/VideoShowPage';
import VideoThumbNailsList from './components/VideoThumbNailsList';


function App() {
 
 

  const [count, setCount] = useState(0)
  const [loadingError, setLoadingError] = useState(false)
  const [videos, setVideos] = useState([]);

  useEffect(() =>  {
    // console.log(videos)
    getAllVideos()
    .then((videosJson) => {
      setVideos(videosJson)
      setLoadingError(false)
    })
    .catch((err) => {
      setLoadingError(true);
      console.error(err)
    })
  }, [])
  
  console.log(videos);

  return (
  
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/about" element={<About />}  />
          <Route path="/videos/:videoId" element={<VideoShowPage videos={videos} />}  />
          <Route path="/thumbnails" element={<VideoThumbNailsList videos={videos} />}  />
          <Route path="/team" element={<TeamInfo/>}  />
          <Route path="/search" element={<SearchBar />}  />
          <Route path="/comments" element={<CommentsList />}  />
          <Route path="/comments-form" element={<CommentsForm />}  />
        </Routes>
        {loadingError && <p>Error loading videos.</p>}
        <SearchBar />
      </Router>
  )
}

export default App
