const URL = import.meta.env.VITE_BASE_API_KEY
// fetch(`https://youtube.googleapis.com/youtube/v3/search?key=${URL}`);


// default to pass props and states
export function getDanceHallVideos() {
    return fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=dancehall&key=${URL}`)
      .then((res) => res.json())
      .catch((err) => {
        console.error("Error fetching dancehall videos:", err);
      });
  }

// Index/getAll

export function getAllVideos () {

    return fetch(`https://youtube.googleapis.com/youtube/v3/search?key=${URL}`)

    .then(res => res.json())
}
export function getOneVideo () {
    return fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchVariable}&key=${URL}`)
    .then(res => res.json())
}

export function getThumbNailsAndId () {
    return fetch(`https://youtube.googleapis.com/youtube/v3/thumbnails/set?videoId=YOUR_VIDEO_ID&key=${URL}`)
    .then(res => res.json())
}

