import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import "./NewComments.css"

export default function NewComments({ videoId }) {
  const [comments, setComments] = useState([]);
  const [username, setUsername] = useState('');
  const [commentText, setCommentText] = useState('');

  useEffect(() => {
    const savedComments = JSON.parse(localStorage.getItem(`comments_${videoId}`) || "[]");
    setComments(savedComments);
  }, [videoId]);

  const handleAddComment = () => {
    if (!username.trim() || !commentText.trim()) return;

    const newComment = {
      username,
      text: commentText,
      timestamp: new Date().toISOString(),
    };

    const updatedComments = [...comments, newComment];
    localStorage.setItem(`comments_${videoId}`, JSON.stringify(updatedComments));
    
    setComments(updatedComments);
    setUsername('');
    setCommentText('');
  };

  return (
    <div className='new-comments'>
      <h3>Comments</h3>
      <div>
        <input 
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <textarea 
          placeholder="Write your comment..."
          value={commentText}
          onChange={e => setCommentText(e.target.value)}
        />
        <Button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={handleAddComment}>Add Comment</Button>
      </div>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>
            <strong>{comment.username}</strong> ({new Date(comment.timestamp).toLocaleString()}):
            <p>{comment.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
