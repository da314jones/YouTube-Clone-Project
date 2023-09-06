const URL = import.meta.env.VITE_BASE_API_KEY
// fetch(`https://youtube.googleapis.com/youtube/v3/search?key=${URL}`);


// default to pass props and states
export function getDefaultPopulation() {
    return fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=popular&key=${URL}`)
      .then((res) => res.json())
      .catch((err) => {
        console.error("Error fetching popular videos:", err);
      });
  }

// Index/getAll

export function getVideosBySearchQuery (query) {
  // https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyBjRfBH2IBGi8nmetv4JViXF1sVnlYg9GM&part=snippet&q=dancehall&maxResults=25
    return fetch(`https://youtube.googleapis.com/youtube/v3/search?key=${URL}&part=snippet&q=${query}&maxResults=25`)
    .then(res => res.json())
}

export function getOneVideo (videoId) {
    return fetch(`https://youtube.googleapis.com/youtube/v3/videos?key=${URL}&part=snippet&id=${videoId}`)
    .then(res => res.json())
}

export function getCommentsByVideoId (videoId) {
    return fetch(`https://www.googleapis.com/youtube/v3/commentThreads?key=${URL}&part=snippet&videoId=${videoId}&maxResults=20`)
    .then(res => res.json())
}

