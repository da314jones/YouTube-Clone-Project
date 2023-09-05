import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCommentsByVideoId, getOneVideo } from "../../Api/fetch";
import IframePlayer from "./IframePlayer";
import CommentsList from "./CommentsList";
import CommentsForm from "./CommentsForm";

export default function VideoShowPage({  }) {
  const { videoId } = useParams();
  console.log(videoId);
  const [video, setVideo] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    if (videoId) {
      getOneVideo(videoId)
        .then((data) => {
          setVideo(data.items[0]);
          setLoading(false);
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

function handleVideoView(video) {
  const existingHistory = JSON.parse(localSrorage.getItem('videoViewedHistory') || "[]");
  const updatedHistory = [video, ...existingHistory];
  localStorage.setItem('videoViewedHistory', JSON.stringify(updatedHistory));
}

function handleVideoView(fullVideoObject) {
  const video = {
    id: fullVideoObject.id,
    title: fullVideoObject.title,
    thumbnailUrl: fullVideoObject.thumbnailUrl
  }
}

  console.log(video);

  return (
    <>
    {loading && <div>Loading...</div>}
    {error && <div className="error-message">{error}</div>}
      {!error && <IframePlayer videoId={videoId} />}
      <CommentsList items={comments} />
      <CommentsForm />
    </>
  );
}
