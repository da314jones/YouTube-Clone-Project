import React from 'react'

function Comment(props) {

const author = props.item.snippet.topLevelcomment.snippet;
  return (
    
    <div className="comment">
      <p> {author.authorProfileImageUrl}</p>
      <p> {author.authorDisplayName}</p>
      <p> {author.textDisplay}</p>
    </div>
  )
}

export default Comment
