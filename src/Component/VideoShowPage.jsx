import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCommentsByVideoId, getOneVideo } from "../../Api/fetch";
import IframePlayer from "./IframePlayer";
import CommentsList from "./CommentsList";
import NewComments from "./NewComments";
import { Button } from "react-bootstrap";
import "./VideoPage.css"

export default function VideoShowPage({  }) {
  const [isFavorited, setIsFavorited] = useState(false)
  const { videoId } = useParams();
  console.log(videoId);
  const [video, setVideo] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || "[]");
    setIsFavorited(favorites.some(favVideo => favVideo.id === videoId));
  }, [video, videoId])

  useEffect(() => {
    setLoading(true);
    if (videoId) {
      getOneVideo(videoId)
        .then((data) => {
          setVideo(data.items[0]);
          setLoading(false);
          handleVideoView(data.items[0]);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
          console.error(err);
        });

      getCommentsByVideoId(videoId)
        .then((data) => {
          setComments(data.items);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [videoId]);

function handleVideoView(fullVideoObject) {
  if (!fullVideoObject || !fullVideoObject.id || !fullVideoObject.title || !fullVideoObject.thumbnailUrl) {
    console.error("Invalid video object passed to VideoView.")
  }
  const video = {
    id: fullVideoObject?.id,
    title: fullVideoObject?.snippet?.title,
    thumbnailUrl: fullVideoObject?.thumbnailUrl
  };


  const existingHistory = JSON.parse(localStorage.getItem('videoViewedHistory') || "[]");
  if (!existingHistory.some(video => video.id === fullVideoObject.id)) {
  const updatedHistory = [video, ...existingHistory];
  localStorage.setItem('videoViewedHistory', JSON.stringify(updatedHistory));
}}

function toggleFavorite() {
  const favorites = JSON.parse(localStorage.getItem('favorites') || "[]");
  if (isFavorited) {
    const updatedFavorites = favorites.filter(favVideo => favVideo.id !== videoId);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  } else {
    const videoData = {
      id: videoId,
      title: video?.snippet?.title,
      thumbnailUrl: video?.snippet?.thumbnails?.default?.url
    };
    const updatedFavorites = [videoData, ...favorites];
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  }setIsFavorited(isFavorited);
}


  return (
    <div className="video container flex flex-row">
    {loading && <div>Loading...</div>}
    {error && <div className="error-message">{error}</div>}
      {!error && <IframePlayer videoId={videoId} />}
    <div className="favorite-toggle">
      {isFavorited
      ? <Button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"onClick={toggleFavorite}>Remove from Favorites</Button>
    : <Button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"onClick={toggleFavorite}>Add to Favorites</Button>
    }
    </div>
    <div className="comments-container flex flex-column">
      <CommentsList items={comments} />
      <NewComments videoId={videoId} />
      </div>
    </div>
  );
}
