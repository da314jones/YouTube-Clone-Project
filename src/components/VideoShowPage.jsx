import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getOneVideo } from '../../Api/fetch'
import IframePlayer from './VideoPlayer';

export default function VideoShowPage() {
    const { videoId } = useParams();
    const [video, setVideo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
      getOneVideo(videoId)
      .then((video) => {
        setVideo(video);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      })
    }, [videoId])

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    
  return (
    <div>
      <h1>{}</h1>
      <IframePlayer videoSrc={} />
    </div>
  )
}
