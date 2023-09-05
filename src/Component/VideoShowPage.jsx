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
    id: fullVideoObject.id,
    title: fullVideoObject.title,
    thumbnailUrl: fullVideoObject.thumbnailUrl
  };


  const existingHistory = JSON.parse(localStorage.getItem('videoViewedHistory') || "[]");
  if (!existingHistory.some(video => video.id === fullVideoObject.id)) {
  const updatedHistory = [video, ...existingHistory];
  localStorage.setItem('videoViewedHistory', JSON.stringify(updatedHistory));
}}

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
