const URL = import.meta.env.VITE_BASE_API_KEY
// fetch(`https://youtube.googleapis.com/youtube/v3/search?key=${URL}`);


// Index/getAll

export function getAllVideos(){

    return fetch(`https://youtube.googleapis.com/youtube/v3/search?key=${URL}&channelId=${channelId}&part=snippet,id&order=date&maxResult=20`)

    .then(res => res.json())
}



// import React from "react";
//  export const CloneVideos = () => {
//     return (
//         <div>
//             <header> Welcome </header>
//         </div>
//     )
//  }