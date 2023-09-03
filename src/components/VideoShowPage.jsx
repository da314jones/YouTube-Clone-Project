import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCommentsByVideoId, getOneVideo } from "../../Api/fetch";
import IframePlayer from "./IframePlayer";
import CommentsList from "./CommentsList";
import CommentsForm from "./CommentsForm";

export default function VideoShowPage({ items }) {
  const { videoId } = useParams();
  console.log(videoId);
  const [video, setVideo] = useState(null);
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
          console.Error(err);
        });
    }
  }, [videoId]);
  
  if (!videoId) {
    return <div>Loading...</div>
  }

  const iframeSrc = `http://www.youtube.com/embed/${videoId}?enablejsapi=1&origin=http://example.com`;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  console.log(video);

  return (
    <>
      
      <IframePlayer
        src={iframeSrc}
        title={`Video ${videoId}`}
        width="560"
        height="315"
      />
      <CommentsList items={items} />
      <CommentsForm />
    </>
  );
}
