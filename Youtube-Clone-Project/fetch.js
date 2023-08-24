const URL = import.meta.env.VITE_BASE_API_KEY



// Create
export function getAllVideos (){
    return fetch(`${URL}/videos`)
    .then(res => res.json())
}