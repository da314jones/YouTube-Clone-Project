import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getCommentsByVideoId, getOneVideo } from '../../Api/fetch'
import IframePlayer from './IframePlayer';
import CommentsList from './CommentsList';
import CommentsForm from './CommentsForm';

export default function VideoShowPage({items}) {
  console.log(videoId)
    const { videoId } = useParams();
    const [video, setVideo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
      if (videoId) {
      getOneVideo(videoId)
      .then((data) => {
        setVideo(data.items[0]);
      })
      .catch((err) => {
        console.Error(err);
      });

      getCommentsByVideoId(videoId) 
      .then((data) => {
        setComments(data.items);
      })
      .catch((err) => {
        console.Error(err);
      });
      }
    }, [videoId]);

    const iframeSrc = `http://www.youtube.com/embed/${videoId}?enablejsapi=1&origin=http://example.com`;

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    console.log(video)
    
  return (
    <div>
      <IframePlayer src={iframeSrc} title={`Video ${videoId}`} width="560" height="315" />
      <CommentsList items={items} />
      <CommentsForm />
    </div>
  )
}
