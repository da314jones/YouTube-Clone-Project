const URL = import.meta.env.VITE_BASE_API_KEY



// Index/getAll
export function getAllVideos (){
    return fetch(`${URL}/videos`)
    .then(res => res.json())
}