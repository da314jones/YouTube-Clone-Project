const URL = import.meta.env.VITE_BASE_API_KEY



// Index/getAll
export function getAllVideos (){
    return fetch(`https://youtube.googleapis.com/youtube/v3/search?key=${URL}`)
    .then(res => res.json())
}