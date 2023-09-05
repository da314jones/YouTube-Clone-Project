import React, { useState, useEffect } from 'react';
import { getCommentsByVideoId } from '../../Api/fetch';


export default function CommentsList({ videoId }) {
  const [comments, setComments] = useState([]);
  const [loadingError, setLoadingError] = useState(false);

  useEffect(() => {
    if (videoId) {
      getCommentsByVideoId(videoId)
        .then((data) => {
          setComments(data.items);
          setLoadingError(false);
        })
        .catch((err) => {
          setLoadingError(true);
          console.error(err);
        });
    }
  }, [videoId]);

  return (
    <div>
      <h3>Comment</h3>
    
      <ul>
        {comments.map((item, index) => (
          <li key={index}>{item.text}</li>
        ))}
      </ul>
      {loadingError && <p>Error Loading Comments.</p>}
    </div>
  );
}

// Api fetch for the comments and video are to be made using the thumbnails videoId and this will return video and comment dt to be rendered in the show page component
// What your code needs to do now is when you click on a thumbnail it should send a new fetch request with your get comments api call using the videoId from the selected thumbnail and then render the comments  in the show video page
// Your code needs to grab the videoId dynamically and then fetch the comments
