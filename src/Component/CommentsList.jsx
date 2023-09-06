import React from "react";
import "./CommentsList.css"


export default function CommentsList({ items }) {
    if (items && items.length === 0) return <div>No comments found.</div>;
  
    const topComment = items[0]?.snippet?.topLevelComment?.snippet?.textDisplay;
  
    return (
      <div className="comments-list">
        <h2>Top Comment:</h2>
        {topComment ? <p>{topComment}</p> : <div>Loading comment...</div>}
      </div>
    );
  }
  