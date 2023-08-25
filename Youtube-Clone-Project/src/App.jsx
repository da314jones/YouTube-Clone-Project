import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getAllVideos } from '../fetch';


function App() {
 
 

  // const [count, setCount] = useState(0)
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
    <>
      <div>
     
      </div>
     
    </>
  )
}

export default App
